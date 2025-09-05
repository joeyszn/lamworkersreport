import { imgCharmTick } from "./svg-nemi1";

function CharmTick() {
  return (
    <div className="relative shrink-0 size-5" data-name="charm:tick">
      <img className="block max-w-none size-full" src={imgCharmTick} />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 w-[100px]" data-name="Email Input">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-3.5 py-2.5 relative w-[100px]">
        <div className="font-['Exo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f65a1f] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Yes</p>
        </div>
        <CharmTick />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f65c1e] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function EmailInput1() {
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

function EmailInput2() {
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

function Frame71379() {
  return (
    <div className="content-stretch flex gap-[21px] items-start justify-start relative shrink-0">
      <EmailInput />
      <EmailInput1 />
      <EmailInput2 />
    </div>
  );
}

export default function Frame71367() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative size-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#222222] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Was Departmental Leader Active This Week?</p>
      </div>
      <Frame71379 />
    </div>
  );
}