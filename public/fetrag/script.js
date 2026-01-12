// Global değişkenler
let signaturePads = {};
let currentPage = 1;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    initializeSignaturePads();
    initializeDateConstraints();
    initializeFormValidation();
    initializeEditableFields();
    initializeAutoSave();
    syncContractNumbers();
    showPage(1);
});

// İmza alanlarını başlat
function initializeSignaturePads() {
    const canvases = document.querySelectorAll('.signature-canvas');

    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        // Canvas boyutunu ayarla
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Çizim fonksiyonları
        function startDrawing(e) {
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
        }

        function draw(e) {
            if (!isDrawing) return;

            const rect = canvas.getBoundingClientRect();
            const currentX = e.clientX - rect.left;
            const currentY = e.clientY - rect.top;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.strokeStyle = '#000080';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.stroke();

            lastX = currentX;
            lastY = currentY;
        }

        function stopDrawing() {
            isDrawing = false;
        }

        // Event listeners
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        // Touch desteği
        canvas.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });

        canvas.addEventListener('touchmove', function(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });

        canvas.addEventListener('touchend', function(e) {
            e.preventDefault();
            const mouseEvent = new MouseEvent('mouseup', {});
            canvas.dispatchEvent(mouseEvent);
        });

        // Signature pad objesini kaydet
        signaturePads[canvas.id] = {
            canvas: canvas,
            ctx: ctx
        };
    });
}

// İmza temizle
function clearSignature(canvasId) {
    const pad = signaturePads[canvasId];
    if (pad) {
        pad.ctx.clearRect(0, 0, pad.canvas.width, pad.canvas.height);
    }
}

// Tarih kısıtlamalarını ayarla
function initializeDateConstraints() {
    const startDateInput = document.getElementById('startDate');
    if (startDateInput) {
        // Bugünün tarihini al
        const today = new Date();
        const minDate = new Date(today);

        // Maximum 10 iş günü sonra
        const maxDate = new Date(today);
        let businessDays = 0;
        while (businessDays < 10) {
            maxDate.setDate(maxDate.getDate() + 1);
            // Hafta sonu değilse iş günü say
            if (maxDate.getDay() !== 0 && maxDate.getDay() !== 6) {
                businessDays++;
            }
        }

        // Input'a min ve max değerlerini ata
        startDateInput.min = today.toISOString().split('T')[0];
        startDateInput.max = maxDate.toISOString().split('T')[0];

        // Varsayılan olarak yarını seç (iş günüyse)
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        if (tomorrow.getDay() !== 0 && tomorrow.getDay() !== 6) {
            startDateInput.value = tomorrow.toISOString().split('T')[0];
        } else {
            // Hafta sonuysa pazartesiyi seç
            const monday = new Date(tomorrow);
            monday.setDate(tomorrow.getDate() + (8 - tomorrow.getDay()) % 7);
            startDateInput.value = monday.toISOString().split('T')[0];
        }
    }
}

// Form doğrulama
function initializeFormValidation() {
    // Tüm zorunlu inputları işaretle
    const requiredInputs = document.querySelectorAll('.form-input[required], .form-input');

    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                validateInput(this);
            }
        });
    });
}

// Input doğrulama
function validateInput(input) {
    let isValid = true;
    const value = input.value.trim();

    // Boş kontrolü
    if (!value && input.hasAttribute('required')) {
        isValid = false;
    }

    // E-posta kontrolü
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }

    // Sayı kontrolü
    if (input.type === 'number' && value) {
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        const numValue = parseFloat(value);

        if (!isNaN(min) && numValue < min) isValid = false;
        if (!isNaN(max) && numValue > max) isValid = false;
    }

    // Stil uygula
    if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }

    return isValid;
}

// Düzenlenebilir alanları başlat
function initializeEditableFields() {
    const editables = document.querySelectorAll('.editable');

    editables.forEach(field => {
        // Placeholder metin
        if (!field.textContent.trim() || field.textContent === '_______') {
            field.textContent = '_______';
            field.style.color = '#999';
        }

        field.addEventListener('focus', function() {
            if (this.textContent === '_______') {
                this.textContent = '';
                this.style.color = '#333';
            }
        });

        field.addEventListener('blur', function() {
            if (!this.textContent.trim()) {
                this.textContent = '_______';
                this.style.color = '#999';
            }
        });

        // Enter tuşunu engelle
        field.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });
    });
}

// Otomatik kaydetme
function initializeAutoSave() {
    let saveTimeout;

    // Form değişikliklerini dinle
    document.addEventListener('input', function(e) {
        if (e.target.matches('.form-input, .editable')) {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                saveFormData();
                showNotification('Otomatik kaydedildi', 'success');
            }, 2000);
        }
    });
}

// Form verilerini kaydet
function saveFormData() {
    const formData = {};

    // Tüm inputları topla
    document.querySelectorAll('.form-input').forEach(input => {
        if (input.id) {
            if (input.type === 'checkbox' || input.type === 'radio') {
                formData[input.id] = input.checked;
            } else {
                formData[input.id] = input.value;
            }
        }
    });

    // Düzenlenebilir alanları topla
    document.querySelectorAll('.editable').forEach((field, index) => {
        formData[`editable_${index}`] = field.textContent;
    });

    // İmza verilerini topla
    Object.keys(signaturePads).forEach(canvasId => {
        const canvas = signaturePads[canvasId].canvas;
        formData[`signature_${canvasId}`] = canvas.toDataURL();
    });

    // LocalStorage'a kaydet
    localStorage.setItem('festgeldFormData', JSON.stringify(formData));
}

// Form verilerini yükle
function loadFormData() {
    const savedData = localStorage.getItem('festgeldFormData');
    if (!savedData) return;

    try {
        const formData = JSON.parse(savedData);

        // Inputları doldur
        Object.keys(formData).forEach(key => {
            if (key.startsWith('editable_')) {
                const index = key.split('_')[1];
                const field = document.querySelectorAll('.editable')[index];
                if (field && formData[key] !== '_______') {
                    field.textContent = formData[key];
                    field.style.color = '#333';
                }
            } else if (key.startsWith('signature_')) {
                const canvasId = key.replace('signature_', '');
                const pad = signaturePads[canvasId];
                if (pad && formData[key]) {
                    const img = new Image();
                    img.onload = function() {
                        pad.ctx.drawImage(img, 0, 0);
                    };
                    img.src = formData[key];
                }
            } else {
                const input = document.getElementById(key);
                if (input) {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        input.checked = formData[key];
                    } else {
                        input.value = formData[key];
                    }
                }
            }
        });
    } catch (e) {
        console.error('Form verileri yüklenemedi:', e);
    }
}

// Sözleşme numaralarını senkronize et
function syncContractNumbers() {
    const contractNumbers = document.querySelectorAll('.contract-number .editable, .contract-number-small .editable');

    contractNumbers.forEach(field => {
        field.addEventListener('input', function() {
            const value = this.textContent;
            contractNumbers.forEach(otherField => {
                if (otherField !== this) {
                    otherField.textContent = value;
                    otherField.style.color = value === '_______' ? '#999' : '#333';
                }
            });
        });
    });
}

// Sayfaya git
function goToPage(pageNumber) {
    showPage(pageNumber);
    currentPage = pageNumber;

    // Sayfa üstüne kaydır
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Sayfayı göster
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index + 1 === pageNumber) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    // Navigasyon butonlarını güncelle
    updatePageNavigation(pageNumber);
}

// Sayfa navigasyonunu güncelle
function updatePageNavigation(currentPage) {
    const navButtons = document.querySelectorAll('.page-navigation button');
    navButtons.forEach((button, index) => {
        if (index + 1 === currentPage) {
            button.style.backgroundColor = '#1e3a5f';
            button.style.color = 'white';
        } else {
            button.style.backgroundColor = '#f8f9fa';
            button.style.color = '#333';
        }
    });
}

// Belgeyi yazdır
function printDocument() {
    // Önce formu kaydet
    saveFormData();

    // Tüm sayfaları göster
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'block';
    });

    // Yazdır
    window.print();

    // Sadece mevcut sayfayı göster
    showPage(currentPage);
}

// PDF olarak kaydet
function saveAsPDF() {
    // Form verilerini kaydet
    saveFormData();

    // Bildirim göster
    showNotification('PDF oluşturuluyor... Lütfen yazdırma penceresinde "PDF olarak kaydet" seçeneğini seçin.', 'info');

    // Yazdırma dialogunu aç
    setTimeout(() => {
        printDocument();
    }, 1000);
}

// Formu sıfırla
function resetForm() {
    if (!confirm('Tüm form verileri silinecek. Emin misiniz?')) {
        return;
    }

    // LocalStorage'ı temizle
    localStorage.removeItem('festgeldFormData');

    // Inputları sıfırla
    document.querySelectorAll('.form-input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
        input.classList.remove('valid', 'invalid');
    });

    // Düzenlenebilir alanları sıfırla
    document.querySelectorAll('.editable').forEach(field => {
        field.textContent = '_______';
        field.style.color = '#999';
    });

    // İmzaları temizle
    Object.keys(signaturePads).forEach(canvasId => {
        clearSignature(canvasId);
    });

    // Tarih kısıtlamalarını yeniden ayarla
    initializeDateConstraints();

    showNotification('Form başarıyla sıfırlandı', 'success');
}

// Örnek veri doldur
function fillSampleData() {
    const sampleData = {
        // Kişi 1
        person1_name: 'Müller',
        person1_vorname: 'Hans',
        person1_geburtsdatum: '1975-03-15',
        person1_geburtsort: 'Frankfurt',
        person1_geburtsland: 'Deutschland',

        // Kişi 2
        person2_name: 'Müller',
        person2_vorname: 'Anna',
        person2_geburtsdatum: '1978-07-22',
        person2_geburtsort: 'Berlin',
        person2_geburtsland: 'Deutschland',

        // Yatırım bilgileri
        laufzeit: '12',
        zinssatz: '5.5',
        anlagesumme: '50000',
        bank: 'Deutsche Bank',

        // Ort ve Datum
        ort_datum: 'Frankfurt, ' + new Date().toLocaleDateString('de-DE'),

        // Sözleşme numarası
        vertragsnummer: 'FG-2026-' + Math.floor(Math.random() * 10000)
    };

    // Verileri forma doldur
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        const placeholder = input.placeholder?.toLowerCase() || '';

        if (placeholder.includes('nachname') && !input.value) {
            input.value = sampleData.person1_name;
        } else if (placeholder.includes('vorname') && !input.value) {
            input.value = sampleData.person1_vorname;
        } else if (placeholder.includes('geburtsort') && !input.value) {
            input.value = sampleData.person1_geburtsort;
        } else if (placeholder.includes('geburtsland') && !input.value) {
            input.value = sampleData.person1_geburtsland;
        } else if (placeholder.includes('10000') && !input.value) {
            input.value = sampleData.anlagesumme;
        } else if (placeholder.includes('bank') && !input.value) {
            input.value = sampleData.bank;
        } else if (placeholder.includes('frankfurt') && !input.value) {
            input.value = sampleData.ort_datum;
        } else if (placeholder === '12' && !input.value) {
            input.value = sampleData.laufzeit;
        } else if (placeholder === '5.5' && !input.value) {
            input.value = sampleData.zinssatz;
        }

        // Input'u doğrula
        validateInput(input);
    });

    // Sözleşme numarasını doldur
    const contractNumbers = document.querySelectorAll('.contract-number .editable, .contract-number-small .editable');
    contractNumbers.forEach(field => {
        field.textContent = sampleData.vertragsnummer;
        field.style.color = '#333';
    });

    // Checkboxları işaretle
    const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });

    // İlk radio butonunu seç
    const firstRadio = document.querySelector('.radio-item input[type="radio"]');
    if (firstRadio) {
        firstRadio.checked = true;
    }

    showNotification('Örnek veriler başarıyla dolduruldu', 'success');
}

// Form doğrulama
function validateForm() {
    let isValid = true;
    const errors = [];

    // Zorunlu alanları kontrol et
    const requiredFields = [
        { selector: '.contract-number .editable', name: 'Vertragsnummer' },
        { selector: 'input[type="date"]#startDate', name: 'Laufzeitbeginn' },
        { selector: '.checkbox-item input[type="checkbox"]', name: 'Checkliste', requireAll: false }
    ];

    requiredFields.forEach(field => {
        if (field.requireAll === false) {
            const checked = document.querySelectorAll(field.selector + ':checked');
            if (checked.length === 0) {
                errors.push(`${field.name} - En az bir seçenek işaretlenmelidir`);
                isValid = false;
            }
        } else {
            const element = document.querySelector(field.selector);
            if (element) {
                if (element.classList.contains('editable')) {
                    if (element.textContent === '_______' || !element.textContent.trim()) {
                        errors.push(`${field.name} doldurulmalıdır`);
                        isValid = false;
                    }
                } else if (element.tagName === 'INPUT') {
                    if (!element.value.trim()) {
                        errors.push(`${field.name} doldurulmalıdır`);
                        isValid = false;
                    }
                }
            }
        }
    });

    // Kişi bilgilerini kontrol et (en az bir kişi doldurulmalı)
    const person1Fields = document.querySelectorAll('.person-form:first-child .form-input');
    let person1Filled = false;
    person1Fields.forEach(input => {
        if (input.value.trim()) {
            person1Filled = true;
        }
    });

    if (!person1Filled) {
        errors.push('En az bir konto/depot sahibinin bilgileri doldurulmalıdır');
        isValid = false;
    }

    // Yatırım bilgilerini kontrol et
    const investmentFields = [
        { selector: 'input[placeholder="12"]', name: 'Laufzeit', min: 3, max: 60 },
        { selector: 'input[placeholder="5.5"]', name: 'Zinssatz', min: 0, max: 20 },
        { selector: 'input[placeholder="10000"]', name: 'Anlagesumme', min: 10000 }
    ];

    investmentFields.forEach(field => {
        const input = document.querySelector(field.selector);
        if (input) {
            const value = parseFloat(input.value);
            if (isNaN(value) || value < field.min || (field.max && value > field.max)) {
                errors.push(`${field.name} geçerli bir değer içermelidir (Min: ${field.min}${field.max ? ', Max: ' + field.max : ''})`);
                isValid = false;
            }
        }
    });

    // İmza kontrolü
    const requiredSignatures = ['signature1'];
    requiredSignatures.forEach(sigId => {
        const pad = signaturePads[sigId];
        if (pad) {
            const canvas = pad.canvas;
            const ctx = pad.ctx;
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            let isEmpty = true;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] !== 0) {
                    isEmpty = false;
                    break;
                }
            }

            if (isEmpty) {
                errors.push('En az bir imza alanı doldurulmalıdır');
                isValid = false;
            }
        }
    });

    // Sonuçları göster
    if (isValid) {
        showNotification('✅ Form başarıyla doğrulandı! Tüm zorunlu alanlar doldurulmuş.', 'success');
    } else {
        let errorMessage = '❌ Form eksik veya hatalı:\n\n';
        errors.forEach((error, index) => {
            errorMessage += `${index + 1}. ${error}\n`;
        });
        alert(errorMessage);
    }

    return isValid;
}

// Bildirim göster
function showNotification(message, type = 'info') {
    // Mevcut bildirimi kaldır
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Stilleri ekle
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        max-width: 300px;
    `;

    // Tip bazlı renkler
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#d4edda';
            notification.style.color = '#155724';
            notification.style.border = '1px solid #c3e6cb';
            break;
        case 'error':
            notification.style.backgroundColor = '#f8d7da';
            notification.style.color = '#721c24';
            notification.style.border = '1px solid #f5c6cb';
            break;
        case 'info':
        default:
            notification.style.backgroundColor = '#d1ecf1';
            notification.style.color = '#0c5460';
            notification.style.border = '1px solid #bee5eb';
            break;
    }

    document.body.appendChild(notification);

    // 3 saniye sonra kaldır
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Animasyon stilleri ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .form-input.valid {
        border-color: #28a745;
        background-color: #f8fff9;
    }

    .form-input.invalid {
        border-color: #dc3545;
        background-color: #fff8f8;
    }
`;
document.head.appendChild(style);

// Sayfa yüklendiğinde kayıtlı verileri yükle
window.addEventListener('load', function() {
    setTimeout(() => {
        loadFormData();
        showNotification('Form hazır. Kontrol panelini kullanarak işlemlerinizi yapabilirsiniz.', 'info');
    }, 500);
});