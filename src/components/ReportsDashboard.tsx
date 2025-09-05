import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import {
  Calendar,
  Clock,
  User,
  Building,
  LogOut,
  Plus,
  Save,
  Check,
  ChevronDown,
} from "lucide-react";
import imgLamLogo1 from "figma:asset/d73c3485e853260a6a12a3217420e79722c9d343.png";
import CharmTick from "../imports/CharmTick";
import {
  imgStashCaretDownDuotone,
  imgLine4,
} from "../imports/svg-8otmi";

interface UserData {
  firstName: string;
  lastName: string;
  department: string;
  stayLoggedIn: boolean;
}

interface WeeklyReport {
  id: string;
  // General Info
  year: string;
  month: string;
  week: string;
  specificChurch: string;
  directorate: string;
  director: string;
  department: string;
  team: string;
  departmentalLeader: string;
  asstDepartmentalLeader: string;
  currentMembershipStrength: string;

  // Reports
  // 1. Active Departmental Leadership
  wasDeptLeaderActive: string;
  wasAsstDeptLeaderActive: string;
  numActiveDeptOfficers: string;

  // 2. Wednesday Service Report
  wedMembersPresent: string;
  wedMembersActivelyServed: string;

  // 3. Sunday Service Report
  sunMembersPresent: string;
  sunMembersActivelyServed: string;

  // 4. Official Departmental Meeting
  meetingStartTime: string;
  meetingEndTime: string;
  meetingDidntHold: boolean;
  meetingMembersPresent: string;

  // 5. Members Weekly Follow-up
  membersNotInServicesAndMeetings: string;
  membersOfficiallyContacted: string;

  // 6. Departmental Funds
  totalFundsRaised: string;
  totalDuesCollected: string;
  totalAmountRaisedByDept: string;
  namesOfGiversAndAmounts: string;

  // 7. Departmental Budget & Projects
  totalMinorExpenditures: string;
  totalMajorProjectsFunding: string;
  detailsOfExpenses: string;

  // 8. Excellent Departmental Uniforms
  didTeamWearUniform: string;
  uniformSpecification: string;
  isUniformNew: string;

  // 9. Excellent Delivery and Fresh Innovations
  teamPerformanceRating: string;
  freshInnovations: string;
  innovationDetails: string;

  submittedAt: string;
}

interface ReportsDashboardProps {
  user: UserData;
  onLogout: () => void;
}

// Custom checkbox component with colored tick
const ColoredCheckbox = ({
  checked,
  onChange,
  id,
  label,
  className = "",
}: {
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
      <Label
        htmlFor={id}
        className="text-sm font-medium text-[#4b4b4b] cursor-pointer font-['Exo']"
      >
        {label}
      </Label>
    </div>
  );
};

// Custom radio button component with colored tick and enhanced styling for active state
const ColoredRadioButton = ({
  checked,
  onChange,
  value,
  children,
  className = "",
  disabled = false,
}: {
  checked: boolean;
  onChange: (value: string) => void;
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(value)}
      disabled={disabled}
      className={`h-[41px] px-4 rounded-[5px] flex items-center justify-center border-2 transition-colors font-['Exo'] ${
        checked
          ? "bg-white border-[#f65c1e] text-[#f65a1f] font-semibold"
          : "bg-white border-[#b4c4c5] text-[#222222] font-medium hover:border-gray-400"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {checked && (
        <div className="w-4 h-4 mr-2">
          <CharmTick />
        </div>
      )}
      {children}
    </button>
  );
};

// Meeting Time Picker Component with proper dropdowns
const MeetingTimePicker = ({
  value,
  onChange,
  placeholder,
  disabled = false,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
}) => {
  const [time, meridian] = value.split(" ");
  const [hours, minutes] = time ? time.split(":") : ["2", "00"];

  const updateTime = (
    newHours: string,
    newMinutes: string,
    newMeridian: string,
  ) => {
    const formattedTime = `${newHours}:${newMinutes} ${newMeridian}`;
    onChange(formattedTime);
  };

  const hourOptions = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString(),
  );
  const minuteOptions = ["00", "15", "30", "45"];

  return (
    <div
      className={`bg-white h-[41px] relative rounded-[5px] w-[149px] ${disabled ? "bg-gray-100" : ""}`}
    >
      <div className="h-[41px] overflow-clip relative w-[149px] flex items-center justify-center gap-1 px-2">
        {/* Hours */}
        <Select
          value={hours || "2"}
          onValueChange={(newHours) =>
            updateTime(
              newHours,
              minutes || "00",
              meridian || "PM",
            )
          }
          disabled={disabled}
        >
          <SelectTrigger className="h-auto w-auto border-none bg-transparent p-0 font-['Exo'] font-medium text-[15px] text-[#222222] shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {hourOptions.map((hour) => (
              <SelectItem key={hour} value={hour}>
                {hour}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Separator */}
        <span
          className={`font-['Exo'] font-medium text-[15px] ${disabled ? "text-gray-400" : "text-[#716e6e]"}`}
        >
          :
        </span>

        {/* Minutes */}
        <Select
          value={minutes || "00"}
          onValueChange={(newMinutes) =>
            updateTime(
              hours || "2",
              newMinutes,
              meridian || "PM",
            )
          }
          disabled={disabled}
        >
          <SelectTrigger className="h-auto w-auto border-none bg-transparent p-0 font-['Exo'] font-medium text-[15px] text-[#222222] shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {minuteOptions.map((minute) => (
              <SelectItem key={minute} value={minute}>
                {minute}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Meridian */}
        <Select
          value={meridian || "PM"}
          onValueChange={(newMeridian) =>
            updateTime(
              hours || "2",
              minutes || "00",
              newMeridian,
            )
          }
          disabled={disabled}
        >
          <SelectTrigger className="h-auto w-auto border-none bg-transparent p-0 font-['Exo'] font-medium text-[15px] text-[#222222] shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AM">AM</SelectItem>
            <SelectItem value="PM">PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        aria-hidden="true"
        className={`absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]`}
      />
    </div>
  );
};

// Currency Input Component with Naira prefix
const CurrencyInput = ({
  value,
  onChange,
  placeholder = "",
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) => {
  // Remove any existing naira prefix from value for display
  const displayValue = value.replace(/^₦\s*/, "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = e.target.value;
    // Don't add naira prefix here, just pass the raw number
    onChange(newValue);
  };

  return (
    <div
      className={`bg-white h-[41px] relative rounded-[5px] w-full ${className}`}
    >
      <div className="h-[41px] leading-[0] overflow-clip relative text-[16px] text-nowrap w-full">
        <div className="absolute font-['Exo'] font-semibold left-3.5 text-[dimgrey] top-2.5 z-10">
          <p className="leading-[normal] text-nowrap whitespace-pre">
            ₦
          </p>
        </div>
        <input
          type="text"
          value={displayValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="absolute font-['Exo'] font-medium left-8 text-[#222222] top-2.5 bg-transparent border-none outline-none w-[calc(100%-2rem)]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
    </div>
  );
};

export function ReportsDashboard({
  user,
  onLogout,
}: ReportsDashboardProps) {
  const [reports, setReports] = useState<WeeklyReport[]>([]);
  const [isSubmissionOpen, setIsSubmissionOpen] =
    useState(false);
  const [retainEntries, setRetainEntries] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  // Helper function to get current date info
  const getCurrentDateInfo = () => {
    const now = new Date();
    const currentYear = now.getFullYear().toString();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = monthNames[now.getMonth()];

    // Calculate current week (Monday to Sunday format)
    const currentDate = now.getDate();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysFromMonday =
      currentDay === 0 ? 6 : currentDay - 1; // Convert Sunday from 0 to 6

    const mondayDate = currentDate - daysFromMonday;
    const sundayDate = mondayDate + 6;

    const mondayObj = new Date(
      now.getFullYear(),
      now.getMonth(),
      mondayDate,
    );
    const sundayObj = new Date(
      now.getFullYear(),
      now.getMonth(),
      sundayDate,
    );

    // Format dates
    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });
    };

    // Calculate week number (approximate)
    const weekNumber = Math.ceil(
      (mondayDate +
        7 -
        new Date(
          now.getFullYear(),
          now.getMonth(),
          1,
        ).getDay()) /
        7,
    );

    const currentWeek = `${weekNumber} (Mon, ${formatDate(mondayObj)} - Sun, ${formatDate(sundayObj)})`;

    return { currentYear, currentMonth, currentWeek };
  };

  // Check if current time is within submission window (Sunday 12 AM to Sunday 11:59 PM)
  const isWithinSubmissionWindow = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Only Sunday (day 0) is allowed, for the entire day (0:00 to 23:59)
    return currentDay === 0;
  };

  // Calculate target time (Sunday 11:59 PM of current week)
  const getTargetTime = () => {
    const now = new Date();
    const target = new Date();

    // Set to Sunday of this week
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
    const daysUntilSunday = (7 - currentDay) % 7; // Days until next Sunday (0 if it's already Sunday)

    if (currentDay === 0) {
      // It's Sunday, set target to Sunday 11:59 PM
      target.setHours(23, 59, 59, 999); // 11:59:59.999 PM
    } else {
      // It's not Sunday, set target to next Sunday 11:59 PM
      target.setDate(now.getDate() + daysUntilSunday);
      target.setHours(23, 59, 59, 999); // 11:59:59.999 PM
    }

    return target;
  };

  // Update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const submissionWindowOpen = isWithinSubmissionWindow();
      setIsSubmissionOpen(submissionWindowOpen);

      if (!submissionWindowOpen) {
        setTimeRemaining(null);
        return;
      }

      const now = new Date();
      const target = getTargetTime();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setIsSubmissionOpen(false);
        setTimeRemaining(null);
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor(
          (difference % (1000 * 60)) / 1000,
        );

        setTimeRemaining({ hours, minutes, seconds });
      }
    };

    // Update immediately
    updateCountdown();

    // Then update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formatCountdown = () => {
    if (!isSubmissionOpen) {
      return "Submission Not Open";
    }

    if (!timeRemaining) {
      return "Loading...";
    }

    const { hours, minutes, seconds } = timeRemaining;
    return `${hours} hours ${minutes} mins ${seconds} secs (11:59 PM)`;
  };

  // Get current date info for auto-updating fields
  const { currentYear, currentMonth, currentWeek } =
    getCurrentDateInfo();

  const [currentReport, setCurrentReport] = useState({
    // General Info - Auto-updated based on current date
    year: currentYear,
    month: currentMonth,
    week: currentWeek,
    specificChurch: "LCC",
    directorate: "Service Management",
    director: "Ms. Peace Anagwu",
    department: user.department || "Brand Management",
    team: "1",
    departmentalLeader: "Ms. Ozochielo Chinaza Faith",
    asstDepartmentalLeader: "Mr. Joel Mgbikeh",
    currentMembershipStrength: "8",

    // Reports
    // 1. Active Departmental Leadership
    wasDeptLeaderActive: "Yes",
    wasAsstDeptLeaderActive: "Yes",
    numActiveDeptOfficers: "3",

    // 2. Wednesday Service Report
    wedMembersPresent: "8",
    wedMembersActivelyServed: "4",

    // 3. Sunday Service Report
    sunMembersPresent: "8",
    sunMembersActivelyServed: "4",

    // 4. Official Departmental Meeting
    meetingStartTime: "2:00 PM",
    meetingEndTime: "2:36 PM",
    meetingDidntHold: false,
    meetingMembersPresent: "7",

    // 5. Members Weekly Follow-up
    membersNotInServicesAndMeetings: "1",
    membersOfficiallyContacted: "",

    // 6. Departmental Funds
    totalFundsRaised: "25,000",
    totalDuesCollected: "5,000",
    totalAmountRaisedByDept: "5,000",
    namesOfGiversAndAmounts:
      "1. John Doe - N2,000\n2. Jamie Doe - N3,000",

    // 7. Departmental Budget & Projects
    totalMinorExpenditures: "",
    totalMajorProjectsFunding: "",
    detailsOfExpenses: "",

    // 8. Excellent Departmental Uniforms
    didTeamWearUniform: "Yes",
    uniformSpecification: "Native Attire",
    isUniformNew: "No",

    // 9. Excellent Delivery and Fresh Innovations
    teamPerformanceRating: "Good",
    freshInnovations: "",
    innovationDetails: "",
  });

  const handleSubmitReport = () => {
    const newReport: WeeklyReport = {
      id: Date.now().toString(),
      ...currentReport,
      submittedAt: new Date().toISOString(),
    };

    setReports((prev) => [newReport, ...prev]);

    if (!retainEntries) {
      // Get fresh current date info for reset
      const {
        currentYear: resetYear,
        currentMonth: resetMonth,
        currentWeek: resetWeek,
      } = getCurrentDateInfo();

      // Reset form if user doesn't want to retain entries
      setCurrentReport({
        // Keep auto-updated general info
        year: resetYear,
        month: resetMonth,
        week: resetWeek,
        specificChurch: currentReport.specificChurch,
        directorate: currentReport.directorate,
        director: currentReport.director,
        department: currentReport.department,
        team: currentReport.team,
        departmentalLeader: currentReport.departmentalLeader,
        asstDepartmentalLeader:
          currentReport.asstDepartmentalLeader,
        currentMembershipStrength:
          currentReport.currentMembershipStrength,
        // Reset only the report fields
        wasDeptLeaderActive: "",
        wasAsstDeptLeaderActive: "",
        numActiveDeptOfficers: "",
        wedMembersPresent: "",
        wedMembersActivelyServed: "",
        sunMembersPresent: "",
        sunMembersActivelyServed: "",
        meetingStartTime: "",
        meetingEndTime: "",
        meetingDidntHold: false,
        meetingMembersPresent: "",
        membersNotInServicesAndMeetings: "",
        membersOfficiallyContacted: "",
        totalFundsRaised: "",
        totalDuesCollected: "",
        totalAmountRaisedByDept: "",
        namesOfGiversAndAmounts: "",
        totalMinorExpenditures: "",
        totalMajorProjectsFunding: "",
        detailsOfExpenses: "",
        didTeamWearUniform: "",
        uniformSpecification: "",
        isUniformNew: "",
        teamPerformanceRating: "",
        freshInnovations: "",
        innovationDetails: "",
      });
    }

    alert("Report submitted successfully!");
  };

  const updateField = (
    field: keyof typeof currentReport,
    value: string | boolean,
  ) => {
    setCurrentReport((prev) => ({ ...prev, [field]: value }));
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] font-['Exo']">
      {/* Header */}
      <div className="bg-white border-b border-[#929292] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div
                className="bg-center bg-cover bg-no-repeat size-10"
                style={{
                  backgroundImage: `url('${imgLamLogo1}')`,
                }}
              />
              <div>
                <h1 className="text-lg font-semibold text-black font-['Exo']">
                  LAM GLOBAL DEPARTMENTAL WEEKLY REPORTS
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-black font-['Exo']">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-600 flex items-center font-['Exo']">
                  <Building className="w-3 h-3 mr-1" />
                  {user.department}
                </p>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="text-gray-600 hover:text-gray-800 font-['Exo'] rounded-[5px]"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Deadline Status */}
              <div className="text-center">
                <p className="text-base text-black mb-4 font-['Exo']">
                  Deadline to submission
                </p>
                <div className="bg-[rgba(255,238,186,0.7)] border border-[#e1e1e1] rounded-[50px] px-6 py-3 inline-block">
                  <p className="font-semibold text-[18px] text-black font-['Exo']">
                    {formatCountdown()}
                  </p>
                </div>
              </div>

              {/* General Info Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[18.885px] font-semibold font-['Exo']">
                    GENERAL INFO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Year
                      </Label>
                      <Input
                        value={currentReport.year}
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                        readOnly
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Month
                      </Label>
                      <Input
                        value={currentReport.month}
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                        readOnly
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Week
                      </Label>
                      <Input
                        value={currentReport.week}
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                        readOnly
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Specific LAM Church
                      </Label>
                      <Input
                        value={currentReport.specificChurch}
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                        readOnly
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Directorate
                      </Label>
                      <Select
                        value={currentReport.directorate}
                        onValueChange={(value) =>
                          updateField("directorate", value)
                        }
                      >
                        <SelectTrigger className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Service Management">
                            Service Management
                          </SelectItem>
                          <SelectItem value="Operations">
                            Operations
                          </SelectItem>
                          <SelectItem value="Administration">
                            Administration
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Director
                      </Label>
                      <Input
                        value={currentReport.director}
                        onChange={(e) =>
                          updateField(
                            "director",
                            e.target.value,
                          )
                        }
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Department
                      </Label>
                      <Select
                        value={currentReport.department}
                        onValueChange={(value) =>
                          updateField("department", value)
                        }
                      >
                        <SelectTrigger className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Brand Management">
                            Brand Management
                          </SelectItem>
                          <SelectItem value="Marketing">
                            Marketing
                          </SelectItem>
                          <SelectItem value="Operations">
                            Operations
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Team
                      </Label>
                      <div className="flex flex-wrap gap-5">
                        <ColoredRadioButton
                          checked={currentReport.team === "1"}
                          onChange={(value) =>
                            updateField("team", value)
                          }
                          value="1"
                          className="w-[161px] sm:w-[120px] md:w-[161px]"
                        >
                          1
                        </ColoredRadioButton>
                        <ColoredRadioButton
                          checked={currentReport.team === "2"}
                          onChange={(value) =>
                            updateField("team", value)
                          }
                          value="2"
                          className="w-[161px] sm:w-[120px] md:w-[161px]"
                        >
                          2
                        </ColoredRadioButton>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Departmental Leader
                      </Label>
                      <Input
                        value={currentReport.departmentalLeader}
                        onChange={(e) =>
                          updateField(
                            "departmentalLeader",
                            e.target.value,
                          )
                        }
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Asst. Departmental Leader
                      </Label>
                      <Input
                        value={
                          currentReport.asstDepartmentalLeader
                        }
                        onChange={(e) =>
                          updateField(
                            "asstDepartmentalLeader",
                            e.target.value,
                          )
                        }
                        className="h-[41px] bg-[rgba(255,255,255,0.5)] border-[#b4c4c5] rounded-[5px] text-[#777575] font-['Exo']"
                        disabled
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                        Current Membership Strength
                      </Label>
                      <Input
                        value={
                          currentReport.currentMembershipStrength
                        }
                        onChange={(e) =>
                          updateField(
                            "currentMembershipStrength",
                            e.target.value,
                          )
                        }
                        className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* The Reports Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[18.885px] font-semibold font-['Exo']">
                    THE REPORTS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-12">
                  {/* 1. Active Departmental Leadership */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      1. Active Departmental Leadership
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Was Departmental Leader Active This
                          Week?
                        </Label>
                        <div className="flex flex-wrap gap-[21px]">
                          <ColoredRadioButton
                            checked={
                              currentReport.wasDeptLeaderActive ===
                              "Yes"
                            }
                            onChange={(value) =>
                              updateField(
                                "wasDeptLeaderActive",
                                value,
                              )
                            }
                            value="Yes"
                            className="w-[100px]"
                          >
                            Yes
                          </ColoredRadioButton>
                          <ColoredRadioButton
                            checked={
                              currentReport.wasDeptLeaderActive ===
                              "No"
                            }
                            onChange={(value) =>
                              updateField(
                                "wasDeptLeaderActive",
                                value,
                              )
                            }
                            value="No"
                            className="w-[101px]"
                          >
                            No
                          </ColoredRadioButton>
                          <ColoredRadioButton
                            checked={
                              currentReport.wasDeptLeaderActive ===
                              "Travelled"
                            }
                            onChange={(value) =>
                              updateField(
                                "wasDeptLeaderActive",
                                value,
                              )
                            }
                            value="Travelled"
                            className="w-[100px]"
                          >
                            Travelled
                          </ColoredRadioButton>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Was Asst. Departmental Leader Active
                          This Week?
                        </Label>
                        <div className="flex flex-wrap gap-[21px]">
                          <ColoredRadioButton
                            checked={
                              currentReport.wasAsstDeptLeaderActive ===
                              "Yes"
                            }
                            onChange={(value) =>
                              updateField(
                                "wasAsstDeptLeaderActive",
                                value,
                              )
                            }
                            value="Yes"
                            className="w-[100px]"
                          >
                            Yes
                          </ColoredRadioButton>
                          <ColoredRadioButton
                            checked={
                              currentReport.wasAsstDeptLeaderActive ===
                              "No"
                            }
                            onChange={(value) =>
                              updateField(
                                "wasAsstDeptLeaderActive",
                                value,
                              )
                            }
                            value="No"
                            className="w-[101px]"
                          >
                            No
                          </ColoredRadioButton>
                          <ColoredRadioButton
                            checked={
                              currentReport.wasAsstDeptLeaderActive ===
                              "Travelled"
                            }
                            onChange={(value) =>
                              updateField(
                                "wasAsstDeptLeaderActive",
                                value,
                              )
                            }
                            value="Travelled"
                            className="w-[100px]"
                          >
                            Travelled
                          </ColoredRadioButton>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Number of Active Departmental Officers
                          This Week
                        </Label>
                        <Input
                          value={
                            currentReport.numActiveDeptOfficers
                          }
                          onChange={(e) =>
                            updateField(
                              "numActiveDeptOfficers",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 2. Wednesday Service Report */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      2. Wednesday Service Report
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Number of Members Present in
                          Service
                        </Label>
                        <Input
                          value={
                            currentReport.wedMembersPresent
                          }
                          onChange={(e) =>
                            updateField(
                              "wedMembersPresent",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Numbers of Members That Actively
                          Served In Service (If on duty)
                        </Label>
                        <Input
                          value={
                            currentReport.wedMembersActivelyServed
                          }
                          onChange={(e) =>
                            updateField(
                              "wedMembersActivelyServed",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 3. Sunday Service Report */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      3. Sunday Service Report
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Number of Members Present in
                          Services
                        </Label>
                        <Input
                          value={
                            currentReport.sunMembersPresent
                          }
                          onChange={(e) =>
                            updateField(
                              "sunMembersPresent",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Numbers of Members That Actively
                          Served In Services (If on duty)
                        </Label>
                        <Input
                          value={
                            currentReport.sunMembersActivelyServed
                          }
                          onChange={(e) =>
                            updateField(
                              "sunMembersActivelyServed",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 4. Official Departmental Meeting */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      4. Official Departmental Meeting
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Meeting Time Duration
                        </Label>
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-4">
                            <MeetingTimePicker
                              value={
                                currentReport.meetingStartTime
                              }
                              onChange={(value) =>
                                updateField(
                                  "meetingStartTime",
                                  value,
                                )
                              }
                              placeholder="2:00 PM"
                              disabled={
                                currentReport.meetingDidntHold
                              }
                            />
                            <span className="text-black font-['Exo']">
                              -
                            </span>
                            <MeetingTimePicker
                              value={
                                currentReport.meetingEndTime
                              }
                              onChange={(value) =>
                                updateField(
                                  "meetingEndTime",
                                  value,
                                )
                              }
                              placeholder="2:36 PM"
                              disabled={
                                currentReport.meetingDidntHold
                              }
                            />
                          </div>
                          <ColoredCheckbox
                            checked={
                              currentReport.meetingDidntHold
                            }
                            onChange={(checked) =>
                              updateField(
                                "meetingDidntHold",
                                checked,
                              )
                            }
                            id="meetingDidntHold"
                            label="Meeting didn't hold"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Numbers of Members Present In
                          Meeting
                        </Label>
                        <Input
                          value={
                            currentReport.meetingMembersPresent
                          }
                          onChange={(e) =>
                            updateField(
                              "meetingMembersPresent",
                              e.target.value,
                            )
                          }
                          className={`h-[41px] border-[#b4c4c5] rounded-[5px] font-['Exo'] ${
                            currentReport.meetingDidntHold
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-white"
                          }`}
                          disabled={
                            currentReport.meetingDidntHold
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 5. Members Weekly Follow-up */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      5. Members Weekly Follow-up
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Numbers of Members Not In
                          Services & Meetings This Week
                        </Label>
                        <Input
                          value={
                            currentReport.membersNotInServicesAndMeetings
                          }
                          onChange={(e) =>
                            updateField(
                              "membersNotInServicesAndMeetings",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Numbers of Members Officially
                          Called or Visited This Week
                        </Label>
                        <Input
                          value={
                            currentReport.membersOfficiallyContacted
                          }
                          onChange={(e) =>
                            updateField(
                              "membersOfficiallyContacted",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 6. Departmental Funds */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      6. Departmental Funds
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Departmental Funds Raised
                        </Label>
                        <CurrencyInput
                          value={currentReport.totalFundsRaised}
                          onChange={(value) =>
                            updateField(
                              "totalFundsRaised",
                              value,
                            )
                          }
                          placeholder="25,000"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Dues Collected This Week
                        </Label>
                        <CurrencyInput
                          value={
                            currentReport.totalDuesCollected
                          }
                          onChange={(value) =>
                            updateField(
                              "totalDuesCollected",
                              value,
                            )
                          }
                          placeholder="5,000"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Amount Raised By The Department
                          This Week
                        </Label>
                        <CurrencyInput
                          value={
                            currentReport.totalAmountRaisedByDept
                          }
                          onChange={(value) =>
                            updateField(
                              "totalAmountRaisedByDept",
                              value,
                            )
                          }
                          placeholder="5,000"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Names of Givers & Amount Given
                        </Label>
                        <Textarea
                          value={
                            currentReport.namesOfGiversAndAmounts
                          }
                          onChange={(e) =>
                            updateField(
                              "namesOfGiversAndAmounts",
                              e.target.value,
                            )
                          }
                          placeholder="1. John Doe - N2,000&#10;2. Jamie Doe - N3,000"
                          className="min-h-[250px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 7. Departmental Budget & Projects */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      7. Departmental Budget & Projects
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Minor Expenditures This Week
                        </Label>
                        <Input
                          value={
                            currentReport.totalMinorExpenditures
                          }
                          onChange={(e) =>
                            updateField(
                              "totalMinorExpenditures",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Total Major Projects Funding This Week
                        </Label>
                        <Input
                          value={
                            currentReport.totalMajorProjectsFunding
                          }
                          onChange={(e) =>
                            updateField(
                              "totalMajorProjectsFunding",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Details of Expenses and Exact Amount
                          Spent
                        </Label>
                        <Textarea
                          value={
                            currentReport.detailsOfExpenses
                          }
                          onChange={(e) =>
                            updateField(
                              "detailsOfExpenses",
                              e.target.value,
                            )
                          }
                          className="min-h-[143px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 8. Excellent Departmental Uniforms */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      8. Excellent Departmental Uniforms
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Did Your Team Wear Uniform This Week?
                        </Label>
                        <div className="flex flex-wrap gap-5">
                          <ColoredRadioButton
                            checked={
                              currentReport.didTeamWearUniform ===
                              "Yes"
                            }
                            onChange={(value) =>
                              updateField(
                                "didTeamWearUniform",
                                value,
                              )
                            }
                            value="Yes"
                            className="w-[161px] sm:w-[140px] md:w-[161px]"
                          >
                            Yes
                          </ColoredRadioButton>
                          <ColoredRadioButton
                            checked={
                              currentReport.didTeamWearUniform ===
                              "No"
                            }
                            onChange={(value) =>
                              updateField(
                                "didTeamWearUniform",
                                value,
                              )
                            }
                            value="No"
                            className="w-[161px] sm:w-[140px] md:w-[161px]"
                          >
                            No
                          </ColoredRadioButton>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          If Yes, Specify The Uniform
                        </Label>
                        <Input
                          value={
                            currentReport.uniformSpecification
                          }
                          onChange={(e) =>
                            updateField(
                              "uniformSpecification",
                              e.target.value,
                            )
                          }
                          placeholder="Native Attire"
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Is the Uniform a New One?
                        </Label>
                        <div className="flex flex-wrap gap-5">
                          <ColoredRadioButton
                            checked={
                              currentReport.isUniformNew ===
                              "Yes"
                            }
                            onChange={(value) =>
                              updateField("isUniformNew", value)
                            }
                            value="Yes"
                            className="w-[161px] sm:w-[140px] md:w-[161px]"
                          >
                            Yes
                          </ColoredRadioButton>
                          <ColoredRadioButton
                            checked={
                              currentReport.isUniformNew ===
                              "No"
                            }
                            onChange={(value) =>
                              updateField("isUniformNew", value)
                            }
                            value="No"
                            className="w-[161px] sm:w-[140px] md:w-[161px]"
                          >
                            No
                          </ColoredRadioButton>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* 9. Excellent Delivery and Fresh Innovations */}
                  <div className="space-y-5">
                    <h3 className="font-medium text-[#f97416] text-[15.885px] font-['Exo']">
                      9. Excellent Delivery and Fresh
                      Innovations
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          How Do You Rate the Departmental
                          Team's Performance This Week?
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-wrap gap-5">
                            <ColoredRadioButton
                              checked={
                                currentReport.teamPerformanceRating ===
                                "Bad"
                              }
                              onChange={(value) =>
                                updateField(
                                  "teamPerformanceRating",
                                  value,
                                )
                              }
                              value="Bad"
                              className="w-[161px] sm:w-[120px] lg:w-[161px]"
                            >
                              Bad
                            </ColoredRadioButton>
                            <ColoredRadioButton
                              checked={
                                currentReport.teamPerformanceRating ===
                                "Poor"
                              }
                              onChange={(value) =>
                                updateField(
                                  "teamPerformanceRating",
                                  value,
                                )
                              }
                              value="Poor"
                              className="w-[161px] sm:w-[120px] lg:w-[161px]"
                            >
                              Poor
                            </ColoredRadioButton>
                          </div>
                          <div className="flex flex-wrap gap-5">
                            <ColoredRadioButton
                              checked={
                                currentReport.teamPerformanceRating ===
                                "Good"
                              }
                              onChange={(value) =>
                                updateField(
                                  "teamPerformanceRating",
                                  value,
                                )
                              }
                              value="Good"
                              className="w-[161px] sm:w-[120px] lg:w-[161px]"
                            >
                              Good
                            </ColoredRadioButton>
                            <ColoredRadioButton
                              checked={
                                currentReport.teamPerformanceRating ===
                                "Excellent"
                              }
                              onChange={(value) =>
                                updateField(
                                  "teamPerformanceRating",
                                  value,
                                )
                              }
                              value="Excellent"
                              className="w-[161px] sm:w-[120px] lg:w-[161px]"
                            >
                              Excellent
                            </ColoredRadioButton>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          What Fresh Innovations Did the Team
                          Add To Service Delivery This Week
                        </Label>
                        <Input
                          value={currentReport.freshInnovations}
                          onChange={(e) =>
                            updateField(
                              "freshInnovations",
                              e.target.value,
                            )
                          }
                          className="h-[41px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-[#222222] font-['Exo']">
                          Details of Fresh Innovations For the
                          Week
                        </Label>
                        <Textarea
                          value={
                            currentReport.innovationDetails
                          }
                          onChange={(e) =>
                            updateField(
                              "innovationDetails",
                              e.target.value,
                            )
                          }
                          className="min-h-[143px] bg-white border-[#b4c4c5] rounded-[5px] font-['Exo']"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Section */}
              <div className="space-y-4">
                <ColoredCheckbox
                  checked={retainEntries}
                  onChange={setRetainEntries}
                  id="retainEntries"
                  label="Retain entries for next session"
                  className="text-[16.078px] font-medium text-black"
                />

                <Button
                  onClick={handleSubmitReport}
                  className="w-full h-[46px] bg-gradient-to-r from-[#ff4500] to-[#ff6600] hover:from-[#e03e00] hover:to-[#e55a00] text-white font-bold text-lg tracking-[0.36px] rounded-[8px] border-none shadow-none font-['Exo']"
                  disabled={!isSubmissionOpen}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-['Exo']">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Reports
                </CardTitle>
                <CardDescription className="font-['Exo']">
                  Your previously submitted weekly reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                {reports.length === 0 ? (
                  <p className="text-gray-500 text-center py-4 font-['Exo']">
                    No reports submitted yet
                  </p>
                ) : (
                  <div className="space-y-4">
                    {reports.slice(0, 5).map((report) => (
                      <div
                        key={report.id}
                        className="p-3 border rounded-lg bg-gray-50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            variant="secondary"
                            className="text-xs font-['Exo']"
                          >
                            {report.week}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 font-['Exo']">
                          {report.department} -{" "}
                          {report.directorate}
                        </p>
                        <p className="text-xs text-gray-400 mt-2 flex items-center font-['Exo']">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDate(report.submittedAt)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* User Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-['Exo']">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-xs text-gray-500 font-['Exo']">
                    Name
                  </Label>
                  <p className="text-sm font-medium font-['Exo']">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <Separator />
                <div>
                  <Label className="text-xs text-gray-500 font-['Exo']">
                    Department
                  </Label>
                  <p className="text-sm font-medium font-['Exo']">
                    {user.department}
                  </p>
                </div>
                <Separator />
                <div>
                  <Label className="text-xs text-gray-500 font-['Exo']">
                    Reports Submitted
                  </Label>
                  <p className="text-sm font-medium font-['Exo']">
                    {reports.length}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}