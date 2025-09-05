import { imgCuidaCaretDownOutline, imgCharmTick } from "./svg-0z39u";

function CuidaCaretDownOutline() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <img className="block max-w-none size-full" src={imgCuidaCaretDownOutline} />
    </div>
  );
}

function CharmTick() {
  return (
    <div className="absolute left-[127px] size-5 translate-y-[-50%]" data-name="charm:tick" style={{ top: "calc(50% + 0.5px)" }}>
      <img className="block max-w-none size-full" src={imgCharmTick} />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap" style={{ top: "calc(50% - 10.5px)" }}>
          <p className="leading-[normal] whitespace-pre">1</p>
        </div>
        <CuidaCaretDownOutline />
        <CharmTick />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
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

function EmailInput1() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-[161px]" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-[161px]">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-nowrap top-2.5">
          <p className="leading-[normal] whitespace-pre">2</p>
        </div>
        <CuidaCaretDownOutline1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71379() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput />
      <EmailInput1 />
    </div>
  );
}

export default function Frame71375() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative size-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Team</p>
      </div>
      <Frame71379 />
    </div>
  );
}