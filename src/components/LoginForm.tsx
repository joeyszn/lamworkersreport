import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import imgLamLogo1 from "figma:asset/d73c3485e853260a6a12a3217420e79722c9d343.png";
import CharmTick from "../imports/CharmTick";

interface LoginFormProps {
  onLogin: (userData: { 
    firstName: string; 
    lastName: string; 
    department: string; 
    stayLoggedIn: boolean; 
  }) => void;
}

// Custom checkbox component with colored tick
const ColoredCheckbox = ({ checked, onChange, id, label, className = "" }: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
  label: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div 
        className="relative w-5 h-5 cursor-pointer"
        onClick={() => onChange(!checked)}
      >
        {checked ? (
          <CharmTick />
        ) : (
          <div className="w-5 h-5 border-2 border-[#f65820] rounded-[10px] bg-white" />
        )}
      </div>
      <Label htmlFor={id} className="text-[16.078px] font-medium text-black cursor-pointer font-['Exo']">
        {label}
      </Label>
    </div>
  );
};

export function LoginForm({ onLogin }: LoginFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && department) {
      onLogin({ firstName, lastName, department, stayLoggedIn });
    }
  };

  const departments = [
    'Brand Management',
    'Marketing',
    'Sales',
    'Operations',
    'Finance',
    'Human Resources',
    'IT',
    'Customer Service'
  ];

  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col items-center justify-center p-4 font-['Exo']">
      <div className="w-full max-w-md space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div
              className="bg-center bg-cover bg-no-repeat size-11"
              style={{ backgroundImage: `url('${imgLamLogo1}')` }}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-[15.778px] font-semibold text-black leading-normal font-['Exo']">
              LAM GLOBAL DEPARTMENTAL WEEKLY REPORTS
            </h1>
          </div>
        </div>
        
        {/* Separator Line */}
        <div className="w-full h-px bg-[#929292] my-8" />

        {/* Login Form */}
        <div className="space-y-6">
          <h2 className="text-[18.885px] font-semibold text-[#222222] font-['Exo']">LOGIN</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-sm font-medium text-black font-['Exo']">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base placeholder:text-neutral-300 font-['Exo']"
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-1.5">
              <Label htmlFor="lastName" className="text-sm font-medium text-black font-['Exo']">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base placeholder:text-neutral-300 font-['Exo']"
                required
              />
            </div>

            {/* Department */}
            <div className="space-y-1.5">
              <Label htmlFor="department" className="text-sm font-medium text-black font-['Exo']">
                Department
              </Label>
              <Select value={department} onValueChange={setDepartment} required>
                <SelectTrigger className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base font-['Exo']">
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Stay Logged In */}
            <ColoredCheckbox
              checked={stayLoggedIn}
              onChange={setStayLoggedIn}
              id="stayLoggedIn"
              label="Stay logged in"
            />

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-[46px] bg-gradient-to-r from-[#ff4500] to-[#ff6600] hover:from-[#e03e00] hover:to-[#e55a00] text-white font-bold text-lg tracking-[0.36px] rounded-[8px] border-none shadow-none font-['Exo']"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}