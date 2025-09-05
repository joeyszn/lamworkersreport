function EmailInput() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] leading-[0] overflow-clip relative text-[16px] text-nowrap w-full">
        <div className="absolute font-['Exo:SemiBold',_sans-serif] font-semibold left-3.5 text-[dimgrey] top-2.5">
          <p className="leading-[normal] text-nowrap whitespace-pre">₦</p>
        </div>
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium left-8 text-[#222222] top-2.5">
          <p className="leading-[normal] text-nowrap whitespace-pre">25,000</p>
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
        <p className="leading-[normal]">Total Departmental Funds Raised</p>
      </div>
      <EmailInput />
    </div>
  );
}

function Frame71382() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71378 />
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] leading-[0] overflow-clip relative text-[16px] text-nowrap w-full">
        <div className="absolute font-['Exo:SemiBold',_sans-serif] font-semibold left-3.5 text-[dimgrey] top-2.5">
          <p className="leading-[normal] text-nowrap whitespace-pre">₦</p>
        </div>
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium left-8 text-[#222222] top-2.5">
          <p className="leading-[normal] text-nowrap whitespace-pre">5,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71379() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Dues Collected This Week</p>
      </div>
      <EmailInput1 />
    </div>
  );
}

function Frame71383() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71379 />
    </div>
  );
}

function EmailInput2() {
  return (
    <div className="bg-white h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] leading-[0] overflow-clip relative text-[16px] text-nowrap w-full">
        <div className="absolute font-['Exo:SemiBold',_sans-serif] font-semibold left-3.5 text-[dimgrey] top-2.5">
          <p className="leading-[normal] text-nowrap whitespace-pre">₦</p>
        </div>
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium left-8 text-[#222222] top-2.5">
          <p className="leading-[normal] text-nowrap whitespace-pre">5,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame71380() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">Total Amount Raised By The Department This Week</p>
      </div>
      <EmailInput2 />
    </div>
  );
}

function Frame71384() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71380 />
    </div>
  );
}

function EmailInput3() {
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

function Frame71381() {
  return (
    <div className="content-stretch flex flex-col gap-1.5 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#222222] text-[14px] w-full">
        <p className="leading-[normal]">{`Names of Givers & Amount Given`}</p>
      </div>
      <EmailInput3 />
    </div>
  );
}

function Frame71385() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame71381 />
    </div>
  );
}

export default function Frame71388() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative size-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f97416] text-[15.885px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">6. Departmental Funds</p>
      </div>
      <Frame71382 />
      <Frame71383 />
      <Frame71384 />
      <Frame71385 />
    </div>
  );
}