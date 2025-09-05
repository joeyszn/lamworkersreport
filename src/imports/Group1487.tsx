import { imgStashCaretDownDuotone, imgLine4 } from "./svg-8otmi";

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

function EmailInput() {
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

function EmailInput1() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[149px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[149px]">
        <Frame71651 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71653() {
  return (
    <div className="absolute content-stretch flex gap-4 items-center justify-start left-0 top-[25px]">
      <EmailInput />
      <div className="h-0 relative shrink-0 w-[13px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <EmailInput1 />
    </div>
  );
}

export default function Group1487() {
  return (
    <div className="relative size-full">
      <Frame71653 />
      <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-0 text-[#222222] text-[14px] top-0 w-[343px]">
        <p className="leading-[normal]">Meeting Time Duration</p>
      </div>
    </div>
  );
}