import React from 'react';
import { Input } from '@/components/ui/input';

interface InputCosoProps {
  type: string;
  placeholder: string;
}

export function InputCoso({ type, placeholder }: InputCosoProps) {
  return <Input type={type} placeholder={placeholder}  className=' bg-red-800'/>;
}
