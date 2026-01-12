import { useState, useEffect } from 'react';

interface EditableTextProps {
  value?: string;
  defaultValue: string;
  onChange: (value: string) => void;
  className?: string;
  multiline?: boolean;
}

export default function EditableText({ 
  value, 
  defaultValue, 
  onChange, 
  className = '', 
  multiline = false 
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value !== undefined ? value : defaultValue);

  useEffect(() => {
    setLocalValue(value !== undefined ? value : defaultValue);
  }, [value, defaultValue]);

  const handleChange = (val: string) => {
    setLocalValue(val);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (localValue !== (value !== undefined ? value : defaultValue)) {
        onChange(localValue);
    }
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          value={localValue}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          className={`w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent resize-none ${className}`}
          autoFocus
          rows={3}
        />
      );
    }
    return (
      <input
        type="text"
        value={localValue}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        className={`w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent ${className}`}
        autoFocus
      />
    );
  }

  return (
    <span
      className={`cursor-pointer hover:text-[#E85D1F] transition-colors whitespace-pre-line ${className}`}
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {localValue || <span className="text-gray-400 italic">Empty</span>}
    </span>
  );
}
