import imgLamLogo1 from "figma:asset/d73c3485e853260a6a12a3217420e79722c9d343.png";
import { imgCuidaCaretDownOutline, imgCharmTick, imgCharmTick1, imgStashCaretDownDuotone, imgLine4, imgLine1, imgMdiUserKeyOutline, imgSymbol, imgSymbol1, imgSymbol2, imgSymbol3, imgSymbol4, imgSignalWifiBattery, imgReload, imgAA } from "./svg-orzsk";

function Frame71366() {
  return (
    <div className="absolute content-stretch flex gap-2 items-center justify-start translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.5px)" }}>
      <div className="flex flex-col font-['Exo:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f9fffc] text-[18px] text-center text-nowrap tracking-[0.36px]">
        <p className="leading-[1.5] whitespace-pre">Submit</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="absolute bottom-[127px] h-[46px] left-1/2 overflow-clip rounded-[10px] translate-x-[-50%] w-[343px]" data-name="Primary Button">
      <Frame71366 />
    </div>
  );
}

function CharmTick() {
  return (
    <div className="bg-[#fffdf3] relative rounded-[10px] shrink-0 size-5" data-name="charm:tick">
      <div aria-hidden="true" className="absolute border-2 border-[#f65820] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="absolute bottom-52 content-stretch flex gap-[8.575px] items-start justify-start left-1/2 translate-x-[-50%] w-[343px]" data-name="Checkbox">
      <CharmTick />
      <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16.078px] text-black">
        <p className="leading-[normal]">Retain entries for next session</p>
      </div>
    </div>
  );
}

function Frame71657() {
  return (
    <div className="bg-[rgba(255,238,186,0.7)] h-12 relative rounded-[50px] shrink-0 w-[325px]">
      <div className="h-12 overflow-clip relative w-[325px]">
        <div className="absolute font-['Exo:SemiBold',_sans-serif] font-semibold leading-[0] text-[18px] text-black text-center text-nowrap translate-x-[-50%]" style={{ top: "calc(50% - 12px)", left: "calc(50% + 0.5px)" }}>
          <p className="leading-[normal] whitespace-pre">3 hours 40 mins 36 secs (11: 59 PM)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame71660() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[16px] text-black text-center" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Deadline to submission</p>
      </div>
      <Frame71657 />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71379() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Year</p>
      </div>
      <EmailInput />
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">August</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71368() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Month</p>
      </div>
      <EmailInput1 />
    </div>
  );
}

function EmailInput2() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">2 (Mon, 4 Aug - Sun, 10 Aug)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71369() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Week</p>
      </div>
      <EmailInput2 />
    </div>
  );
}

function EmailInput3() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">LCC</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71370() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Specific LAM Church</p>
      </div>
      <EmailInput3 />
    </div>
  );
}

function CuidaCaretDownOutline() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput4() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Service Management</p>
        </div>
        <CuidaCaretDownOutline />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71372() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Directorate</p>
      </div>
      <EmailInput4 />
    </div>
  );
}

function EmailInput5() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">Ms. Peace Anagwu</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71373() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[13px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Director</p>
      </div>
      <EmailInput5 />
    </div>
  );
}

function CuidaCaretDownOutline1() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput6() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Brand Management</p>
        </div>
        <CuidaCaretDownOutline1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71374() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Department</p>
      </div>
      <EmailInput6 />
    </div>
  );
}

function CuidaCaretDownOutline2() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function CharmTick1() {
  return (
    <div className="absolute left-[127px] size-5 translate-y-[-50%]" data-name="charm:tick" style={{ top: "calc(50% + 0.5px)" }}>
      <img className="block max-w-none size-full" src={imgCharmTick} />
    </div>
  );
}

function EmailInput7() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap" style={{ top: "calc(50% - 10.5px)" }}>
          <p className="leading-[normal] whitespace-pre">1</p>
        </div>
        <CuidaCaretDownOutline2 />
        <CharmTick1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function CuidaCaretDownOutline3() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput8() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">2</p>
        </div>
        <CuidaCaretDownOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71392() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput7 />
      <EmailInput8 />
    </div>
  );
}

function Frame71375() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Team</p>
      </div>
      <Frame71392 />
    </div>
  );
}

function EmailInput9() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">Ms. Ozochielo Chinaza Faith</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71376() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Departmental Leader</p>
      </div>
      <EmailInput9 />
    </div>
  );
}

function EmailInput10() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[5px] shrink-0 w-[343px]" data-name="Email Input">
      <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-3.5 py-2.5 relative w-[343px]">
        <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#777575] text-[16px]">
          <p className="leading-[normal]">Mr. Joel Mgbikeh</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71377() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Asst. Departmental Leader</p>
      </div>
      <EmailInput10 />
    </div>
  );
}

function EmailInput11() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">8</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71378() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Current Membership Strength</p>
      </div>
      <EmailInput11 />
    </div>
  );
}

function Frame71371() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start justify-start relative shrink-0 w-full">
      <Frame71379 />
      <Frame71368 />
      <Frame71369 />
      <Frame71370 />
      <Frame71372 />
      <Frame71373 />
      <Frame71374 />
      <Frame71375 />
      <Frame71376 />
      <Frame71377 />
      <Frame71378 />
    </div>
  );
}

function Frame71380() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:SemiBold',_sans-serif] font-semibold h-[25px] leading-[0] relative shrink-0 text-[18.885px] text-black w-full">
        <p className="leading-[normal]">GENERAL INFO</p>
      </div>
      <Frame71371 />
    </div>
  );
}

function CharmTick2() {
  return (
    <div className="relative shrink-0 size-5" data-name="charm:tick">
      <img className="block max-w-none size-full" src={imgCharmTick1} />
    </div>
  );
}

function EmailInput12() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 w-[100px]" data-name="Email Input">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-3.5 py-2.5 relative w-[100px]">
        <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Yes</p>
        </div>
        <CharmTick2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function EmailInput13() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[101px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[101px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">No</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function EmailInput14() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[100px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[100px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Travelled</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71393() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput12 />
      <EmailInput13 />
      <EmailInput14 />
    </div>
  );
}

function Frame71367() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Was Departmental Leader Active This Week?</p>
      </div>
      <Frame71393 />
    </div>
  );
}

function CharmTick3() {
  return (
    <div className="relative shrink-0 size-5" data-name="charm:tick">
      <img className="block max-w-none size-full" src={imgCharmTick1} />
    </div>
  );
}

function EmailInput15() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 w-[100px]" data-name="Email Input">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-3.5 py-2.5 relative w-[100px]">
        <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Yes</p>
        </div>
        <CharmTick3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function EmailInput16() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[101px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[101px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">No</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function EmailInput17() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[100px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[100px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Travelled</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71394() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput15 />
      <EmailInput16 />
      <EmailInput17 />
    </div>
  );
}

function Frame71395() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Was Asst. Departmental Leader Active This Week?</p>
      </div>
      <Frame71394 />
    </div>
  );
}

function EmailInput18() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71396() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Number of Active Departmental Officers This Week</p>
      </div>
      <EmailInput18 />
    </div>
  );
}

function Frame71382() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71367 />
      <Frame71395 />
      <Frame71396 />
    </div>
  );
}

function Frame71383() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">1. Active Departmental Leadership</p>
      </div>
      <Frame71382 />
    </div>
  );
}

function EmailInput19() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">8</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71397() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Number of Members Present in Service</p>
      </div>
      <EmailInput19 />
    </div>
  );
}

function EmailInput20() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71398() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Numbers of Members That Actively Served In Service (If on duty)</p>
      </div>
      <EmailInput20 />
    </div>
  );
}

function Frame71399() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71397 />
      <Frame71398 />
    </div>
  );
}

function Frame71384() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">2. Wednesday Service Report</p>
      </div>
      <Frame71399 />
    </div>
  );
}

function EmailInput21() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">8</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71400() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Number of Members Present in Services</p>
      </div>
      <EmailInput21 />
    </div>
  );
}

function EmailInput22() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71401() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Numbers of Members That Actively Served In Services (If on duty)</p>
      </div>
      <EmailInput22 />
    </div>
  );
}

function Frame71402() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71400 />
      <Frame71401 />
    </div>
  );
}

function Frame71385() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">3. Sunday Service Report</p>
      </div>
      <Frame71402 />
    </div>
  );
}

function Frame71625() {
  return (
    <div className="content-stretch flex font-['Exo:Medium',_sans-serif] font-medium gap-2 items-center justify-start leading-[0] relative shrink-0 text-[15px] text-nowrap">
      <div className="relative shrink-0 text-[#222222]">
        <p className="leading-[normal] text-nowrap whitespace-pre">2</p>
      </div>
      <div className="relative shrink-0 text-[#716e6e]">
        <p className="leading-[normal] text-nowrap whitespace-pre">:</p>
      </div>
      <div className="relative shrink-0 text-[#222222]">
        <p className="leading-[normal] text-nowrap whitespace-pre">00</p>
      </div>
    </div>
  );
}

function Frame71626() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
      <Frame71625 />
    </div>
  );
}

function StashCaretDownDuotone() {
  return (
    <div className="relative shrink-0 size-5" data-name="stash:caret-down-duotone">
      <img className="block max-w-none size-full" src={imgStashCaretDownDuotone} />
    </div>
  );
}

function Frame71624() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[15px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">PM</p>
      </div>
      <StashCaretDownDuotone />
    </div>
  );
}

function Frame71652() {
  return (
    <div className="absolute content-stretch flex gap-[13.333px] items-center justify-start translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.167px)" }}>
      <Frame71626 />
      <Frame71624 />
    </div>
  );
}

function EmailInput23() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[149px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[149px]">
        <Frame71652 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71627() {
  return (
    <div className="content-stretch flex font-['Exo:Medium',_sans-serif] font-medium gap-2 items-center justify-start leading-[0] relative shrink-0 text-[15px] text-nowrap">
      <div className="relative shrink-0 text-[#222222]">
        <p className="leading-[normal] text-nowrap whitespace-pre">2</p>
      </div>
      <div className="relative shrink-0 text-[#716e6e]">
        <p className="leading-[normal] text-nowrap whitespace-pre">:</p>
      </div>
      <div className="relative shrink-0 text-[#222222]">
        <p className="leading-[normal] text-nowrap whitespace-pre">36</p>
      </div>
    </div>
  );
}

function Frame71628() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
      <Frame71627 />
    </div>
  );
}

function StashCaretDownDuotone1() {
  return (
    <div className="relative shrink-0 size-5" data-name="stash:caret-down-duotone">
      <img className="block max-w-none size-full" src={imgStashCaretDownDuotone} />
    </div>
  );
}

function Frame71629() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[15px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">PM</p>
      </div>
      <StashCaretDownDuotone1 />
    </div>
  );
}

function Frame71651() {
  return (
    <div className="absolute content-stretch flex gap-[13.333px] items-center justify-start translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.167px)" }}>
      <Frame71628 />
      <Frame71629 />
    </div>
  );
}

function EmailInput24() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[149px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[149px]">
        <Frame71651 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71654() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
      <EmailInput23 />
      <div className="h-0 relative shrink-0 w-[13px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <EmailInput24 />
    </div>
  );
}

function CharmTick4() {
  return (
    <div className="bg-[#fffdf3] relative rounded-[8px] shrink-0 size-4" data-name="charm:tick">
      <div aria-hidden="true" className="absolute border-[#f65820] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[8.575px] items-center justify-start relative shrink-0 w-[343px]" data-name="Checkbox">
      <CharmTick4 />
      <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#4b4b4b] text-[14px]">
        <p className="leading-[normal]">Meeting didn’t hold</p>
      </div>
    </div>
  );
}

function Frame71653() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
      <Frame71654 />
      <Checkbox1 />
    </div>
  );
}

function Frame71403() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Meeting Time Duration</p>
      </div>
      <Frame71653 />
    </div>
  );
}

function EmailInput25() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">7</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71404() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Numbers of Members Present In Meeting</p>
      </div>
      <EmailInput25 />
    </div>
  );
}

function Frame71405() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71403 />
      <Frame71404 />
    </div>
  );
}

function Frame71386() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">4. Official Departmental Meeting</p>
      </div>
      <Frame71405 />
    </div>
  );
}

function EmailInput26() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71406() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">{`Total Numbers of Members Not In Services & Meetings This Week`}</p>
      </div>
      <EmailInput26 />
    </div>
  );
}

function Frame71407() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71406 />
    </div>
  );
}

function EmailInput27() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre"> </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71408() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Numbers of Members Officially Called or Visited This Week</p>
      </div>
      <EmailInput27 />
    </div>
  );
}

function Frame71409() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71408 />
    </div>
  );
}

function Frame71387() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">5. Members Weekly Follow-up</p>
      </div>
      <Frame71407 />
      <Frame71409 />
    </div>
  );
}

function EmailInput28() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">N25,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71410() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Departmental Funds Raised</p>
      </div>
      <EmailInput28 />
    </div>
  );
}

function Frame71411() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71410 />
    </div>
  );
}

function EmailInput29() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">N5,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71412() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Dues Collected This Week</p>
      </div>
      <EmailInput29 />
    </div>
  );
}

function Frame71413() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71412 />
    </div>
  );
}

function EmailInput30() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">N5,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71414() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Amount Raised By The Department This Week</p>
      </div>
      <EmailInput30 />
    </div>
  );
}

function Frame71415() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71414 />
    </div>
  );
}

function EmailInput31() {
  return (
    <div className="bg-white h-[250px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[250px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[normal] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5 whitespace-pre">
          <p className="mb-0">1. John Doe - N2,000</p>
          <p>2. Jamie Doe - N3,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71416() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">{`Names of Givers & Amount Given`}</p>
      </div>
      <EmailInput31 />
    </div>
  );
}

function Frame71417() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71416 />
    </div>
  );
}

function Frame71388() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">6. Departmental Funds</p>
      </div>
      <Frame71411 />
      <Frame71413 />
      <Frame71415 />
      <Frame71417 />
    </div>
  );
}

function EmailInput32() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre"> </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71418() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Minor Expenditures This Week</p>
      </div>
      <EmailInput32 />
    </div>
  );
}

function Frame71419() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71418 />
    </div>
  );
}

function EmailInput33() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre"> </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71420() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Major Projects Funding This Week</p>
      </div>
      <EmailInput33 />
    </div>
  );
}

function EmailInput34() {
  return (
    <div className="bg-white h-[143px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[143px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[normal] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5 whitespace-pre">
          <p className="mb-0"> </p>
          <p> </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71421() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Details of Expenses and Exact Amount Spent</p>
      </div>
      <EmailInput34 />
    </div>
  );
}

function Frame71422() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71421 />
    </div>
  );
}

function Frame71423() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71420 />
      <Frame71422 />
    </div>
  );
}

function Frame71389() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`7. Departmental Budget & Projects`}</p>
      </div>
      <Frame71419 />
      <Frame71423 />
    </div>
  );
}

function CuidaCaretDownOutline4() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function CharmTick5() {
  return (
    <div className="absolute left-[127px] size-5 translate-y-[-50%]" data-name="charm:tick" style={{ top: "calc(50% + 0.5px)" }}>
      <img className="block max-w-none size-full" src={imgCharmTick} />
    </div>
  );
}

function EmailInput35() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap" style={{ top: "calc(50% - 10.5px)" }}>
          <p className="leading-[normal] whitespace-pre">Yes</p>
        </div>
        <CuidaCaretDownOutline4 />
        <CharmTick5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function CuidaCaretDownOutline5() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput36() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">No</p>
        </div>
        <CuidaCaretDownOutline5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71424() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput35 />
      <EmailInput36 />
    </div>
  );
}

function Frame71425() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Did Your Team Wear Uniform This Week?</p>
      </div>
      <Frame71424 />
    </div>
  );
}

function EmailInput37() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Native Attire</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71426() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">If Yes, Specify The Uniform</p>
      </div>
      <EmailInput37 />
    </div>
  );
}

function CuidaCaretDownOutline6() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput38() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Yes</p>
        </div>
        <CuidaCaretDownOutline6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function CuidaCaretDownOutline7() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function CharmTick6() {
  return (
    <div className="absolute left-[127px] size-5 translate-y-[-50%]" data-name="charm:tick" style={{ top: "calc(50% + 0.5px)" }}>
      <img className="block max-w-none size-full" src={imgCharmTick} />
    </div>
  );
}

function EmailInput39() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap" style={{ top: "calc(50% - 10.5px)" }}>
          <p className="leading-[normal] whitespace-pre">No</p>
        </div>
        <CuidaCaretDownOutline7 />
        <CharmTick6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71427() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput38 />
      <EmailInput39 />
    </div>
  );
}

function Frame71428() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Is the Uniform a New One?</p>
      </div>
      <Frame71427 />
    </div>
  );
}

function Frame71429() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71425 />
      <Frame71426 />
      <Frame71428 />
    </div>
  );
}

function Frame71390() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">8. Excellent Departmental Uniforms</p>
      </div>
      <Frame71429 />
    </div>
  );
}

function CuidaCaretDownOutline8() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput40() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Bad</p>
        </div>
        <CuidaCaretDownOutline8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function CuidaCaretDownOutline9() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput41() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Poor</p>
        </div>
        <CuidaCaretDownOutline9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71430() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput40 />
      <EmailInput41 />
    </div>
  );
}

function CuidaCaretDownOutline10() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function CharmTick7() {
  return (
    <div className="absolute left-[127px] size-5 translate-y-[-50%]" data-name="charm:tick" style={{ top: "calc(50% + 0.5px)" }}>
      <img className="block max-w-none size-full" src={imgCharmTick} />
    </div>
  );
}

function EmailInput42() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap" style={{ top: "calc(50% - 10.5px)" }}>
          <p className="leading-[normal] whitespace-pre">Good</p>
        </div>
        <CuidaCaretDownOutline10 />
        <CharmTick7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function CuidaCaretDownOutline11() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function EmailInput43() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">Excellent</p>
        </div>
        <CuidaCaretDownOutline11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71431() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput42 />
      <EmailInput43 />
    </div>
  );
}

function Frame71656() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
      <Frame71430 />
      <Frame71431 />
    </div>
  );
}

function Frame71432() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">How Do You Rate the Departmental Team’s Performance This Week?</p>
      </div>
      <Frame71656 />
    </div>
  );
}

function EmailInput44() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre"> </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71433() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">What Fresh Innovations Did the Team Add To Service Delivery This Week</p>
      </div>
      <EmailInput44 />
    </div>
  );
}

function EmailInput45() {
  return (
    <div className="bg-white h-[143px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[143px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[normal] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5 whitespace-pre">
          <p className="mb-0"> </p>
          <p> </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71434() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Details of Fresh Innovations For the Week</p>
      </div>
      <EmailInput45 />
    </div>
  );
}

function Frame71435() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71434 />
    </div>
  );
}

function Frame71436() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71432 />
      <Frame71433 />
      <Frame71435 />
    </div>
  );
}

function Frame71391() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">9. Excellent Delivery and Fresh Innovations</p>
      </div>
      <Frame71436 />
    </div>
  );
}

function Frame71437() {
  return (
    <div className="content-stretch flex flex-col gap-[45px] items-start justify-start relative shrink-0 w-full">
      <Frame71383 />
      <div className="h-0 relative shrink-0 w-[343px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img className="block max-w-none size-full" src={imgLine1} />
        </div>
      </div>
      <Frame71384 />
      <div className="h-0 relative shrink-0 w-[343px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img className="block max-w-none size-full" src={imgLine1} />
        </div>
      </div>
      <Frame71385 />
      <div className="h-0 relative shrink-0 w-[343px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img className="block max-w-none size-full" src={imgLine1} />
        </div>
      </div>
      <Frame71386 />
      <Frame71387 />
      <Frame71388 />
      <Frame71389 />
      <Frame71390 />
      <Frame71391 />
    </div>
  );
}

function Frame71381() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:SemiBold',_sans-serif] font-semibold h-[25px] leading-[0] relative shrink-0 text-[18.885px] text-black w-full">
        <p className="leading-[normal]">THE REPORTS</p>
      </div>
      <Frame71437 />
    </div>
  );
}

function Frame71659() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start justify-start relative shrink-0 w-full">
      <Frame71380 />
      <Frame71381 />
    </div>
  );
}

function Frame71662() {
  return (
    <div className="absolute content-stretch flex flex-col gap-9 items-center justify-start left-[25px] top-[231px] w-[343px]">
      <Frame71660 />
      <Frame71659 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="absolute content-stretch flex gap-4 items-center justify-start left-5 top-1/2 translate-y-[-50%]">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-11" data-name="lam-logo 1" style={{ backgroundImage: `url('${imgLamLogo1}')` }} />
      <div className="flex flex-col font-['Exo:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#000004] text-[14.778px] w-[221px]">
        <p className="leading-[normal]">LAM GLOBAL DEPARTMENTAL WEEKLY REPORTS</p>
      </div>
    </div>
  );
}

function MdiUserKeyOutline() {
  return (
    <div className="absolute left-[342px] size-[26px] top-1/2 translate-y-[-50%]" data-name="mdi:user-key-outline">
      <img className="block max-w-none size-full" src={imgMdiUserKeyOutline} />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white h-[84px] left-0 overflow-clip shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] top-28 w-[393px]" data-name="Navbar">
      <Frame139 />
      <MdiUserKeyOutline />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="h-[43.664px] relative shrink-0 w-full" data-name="Toolbar">
      <div className="absolute h-[21.918px] right-[18.61px] translate-y-[-50%] w-[22.335px]" data-name="Symbol" style={{ top: "calc(50% - 0.304px)" }}>
        <img className="block max-w-none size-full" src={imgSymbol} />
      </div>
      <div className="absolute h-[18.102px] right-[97.67px] translate-y-[-50%] w-[21.013px]" data-name="Symbol" style={{ top: "calc(50% - 0.186px)" }}>
        <img className="block max-w-none size-full" src={imgSymbol1} />
      </div>
      <div className="absolute h-[22.966px] translate-x-[-50%] translate-y-[-50%] w-[18.062px]" data-name="Symbol" style={{ top: "calc(50% - 0.98px)", left: "calc(50% - 0.005px)" }}>
        <img className="block max-w-none size-full" src={imgSymbol2} />
      </div>
      <div className="absolute h-[17.685px] left-[103.19px] translate-y-[-50%] w-[9.952px]" data-name="Symbol" style={{ top: "calc(50% - 0.232px)" }}>
        <img className="block max-w-none size-full" src={imgSymbol3} />
      </div>
      <div className="absolute h-[17.675px] left-[24.8px] translate-y-[-50%] w-[9.952px]" data-name="Symbol" style={{ top: "calc(50% - 0.237px)" }}>
        <img className="block max-w-none size-full" src={imgSymbol4} />
      </div>
    </div>
  );
}

function HomeBarPro() {
  return (
    <div className="h-[33.74px] relative shrink-0 w-[390px]" data-name="Home bar/Pro">
      <div className="absolute bg-black bottom-[8.67px] h-[4.962px] rounded-[99.237px] translate-x-[-50%] w-[137.939px]" data-name="Home Indicator" style={{ left: "calc(50% - 0.496px)" }} />
    </div>
  );
}

function ToolbarPro() {
  return (
    <div className="absolute backdrop-blur-[10px] backdrop-filter bg-[rgba(249,249,249,0.94)] bottom-[-0.37px] box-border content-stretch flex flex-col items-center justify-start pb-0 pt-[4.962px] px-0 translate-x-[-50%] w-[390px]" data-name="Toolbar/Pro" style={{ left: "calc(50% + 1.5px)" }}>
      <Toolbar />
      <HomeBarPro />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.33px_0px_0px_inset_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function StatusBarTime() {
  return (
    <div className="h-[21px] relative rounded-[24px] shrink-0 w-[54px]" data-name="_StatusBar-time">
      <div className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] h-5 leading-[0] left-[27px] not-italic text-[16px] text-black text-center top-px tracking-[-0.32px] translate-x-[-50%] w-[54px]">
        <p className="leading-[21px]">9:41</p>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Left Side">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center pb-[3px] pl-2.5 pr-0 pt-0 relative size-full">
          <StatusBarTime />
        </div>
      </div>
    </div>
  );
}

function TrueDepthCamera() {
  return <div className="absolute bg-black h-[37px] rounded-[100px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-20" data-name="TrueDepth camera" style={{ left: "calc(50% - 22.5px)" }} />;
}

function FaceTimeCamera() {
  return <div className="absolute bg-black rounded-[100px] size-[37px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="FaceTime camera" style={{ left: "calc(50% + 44px)" }} />;
}

function StatusBarDynamicIsland() {
  return (
    <div className="bg-black h-[37px] relative rounded-[100px] shrink-0 w-[125px]" data-name="StatusBar-dynamicIsland">
      <TrueDepthCamera />
      <FaceTimeCamera />
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Dynamic Island">
      <StatusBarDynamicIsland />
    </div>
  );
}

function SignalWifiBattery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[78.401px]" data-name="Signal, Wifi, Battery">
      <img className="block max-w-none size-full" src={imgSignalWifiBattery} />
    </div>
  );
}

function RightSide() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Right Side">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center pl-0 pr-[11px] py-0 relative size-full">
          <SignalWifiBattery />
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex h-[59px] items-end justify-center relative shrink-0 w-full" data-name="StatusBar">
      <LeftSide />
      <DynamicIsland />
      <RightSide />
    </div>
  );
}

function Domain() {
  return (
    <div className="absolute content-stretch flex gap-[3.969px] items-center justify-start leading-[0] overflow-clip text-black text-nowrap top-[8.93px] translate-x-[-50%]" data-name="domain" style={{ left: "calc(50% - 0.084px)" }}>
      <div className="flex flex-col font-['SF_Compact_Display:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-[13.893px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">􀎡</p>
      </div>
      <div className="flex flex-col font-['Albert_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[14.885px] tracking-[-0.4168px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">https://workerreports.mylamworld.org/...</p>
      </div>
    </div>
  );
}

function SearchTop() {
  return (
    <div className="h-[35.725px] relative shrink-0 w-[367.176px]" data-name="Search Top">
      <div className="absolute bg-[rgba(0,0,0,0.08)] inset-0 rounded-[9.924px]" data-name="input search" />
      <div className="absolute h-[17.845px] right-[8.87px] translate-y-[-50%] w-[14.644px]" data-name="reload" style={{ top: "calc(50% + 0.133px)" }}>
        <img className="block max-w-none size-full" src={imgReload} />
      </div>
      <div className="absolute h-[12.237px] left-[10.04px] translate-y-[-50%] w-[18.56px]" data-name="aA" style={{ top: "calc(50% + 0.139px)" }}>
        <img className="block max-w-none size-full" src={imgAA} />
      </div>
      <Domain />
    </div>
  );
}

function SearchBarPro() {
  return (
    <div className="absolute backdrop-blur-[7.939px] backdrop-filter bg-[rgba(249,249,249,0.94)] box-border content-stretch flex flex-col gap-[6.947px] items-center justify-start left-0 pb-[9.924px] pt-0 px-0 right-0 top-0" data-name="Search Bar/Pro">
      <StatusBar />
      <SearchTop />
    </div>
  );
}

export default function ReportBeforeDeadline() {
  return (
    <div className="bg-[#fffdf3] relative size-full" data-name="Report (Before deadline)">
      <Navbar />
      <ToolbarPro />
      <SearchBarPro />
      <PrimaryButton />
      <Checkbox />
      <Frame71662 />
    </div>
  );
}