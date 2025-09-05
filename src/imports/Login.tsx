import svgPaths from "./svg-uj5d9s0un5";
import imgLamLogo1 from "figma:asset/d73c3485e853260a6a12a3217420e79722c9d343.png";

function Frame139() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 top-32 translate-x-[-50%]"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-11"
        data-name="lam-logo 1"
        style={{ backgroundImage: `url('${imgLamLogo1}')` }}
      />
      <div className="flex flex-col font-['Exo:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#000000] text-[15.778px] text-center w-[280px]">
        <p className="block leading-[normal]">LAM GLOBAL DEPARTMENTAL WEEKLY REPORTS</p>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="h-[43.664px] relative shrink-0 w-full" data-name="Toolbar">
      <div
        className="absolute h-[21.918px] right-[18.61px] translate-y-[-50%] w-[22.335px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.304px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <path d={svgPaths.p3a3d5600} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[18.102px] right-[97.67px] translate-y-[-50%] w-[21.013px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.187px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
          <path d={svgPaths.p132d5500} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[22.966px] translate-x-[-50%] translate-y-[-50%] w-[18.062px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.98px)", left: "calc(50% - 0.005px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 23">
          <path d={svgPaths.p159ad870} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[17.685px] left-[103.19px] translate-y-[-50%] w-[9.952px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.232px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
          <path d={svgPaths.p112f7f80} fill="var(--fill-0, #CECECE)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[17.675px] left-[24.8px] translate-y-[-50%] w-[9.952px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.237px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
          <path d={svgPaths.pf72b6f0} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function HomeBarPro() {
  return (
    <div className="h-[33.74px] relative shrink-0 w-[390px]" data-name="Home bar/Pro">
      <div
        className="absolute bg-[#000000] bottom-[8.67px] h-[4.962px] rounded-[99.237px] translate-x-[-50%] w-[137.939px]"
        data-name="Home Indicator"
        style={{ left: "calc(50% - 0.496px)" }}
      />
    </div>
  );
}

function ToolbarPro() {
  return (
    <div
      className="absolute backdrop-blur-[10px] backdrop-filter bg-[rgba(249,249,249,0.94)] bottom-[-0.37px] box-border content-stretch flex flex-col items-center justify-start pb-0 pt-[4.962px] px-0 translate-x-[-50%] w-[390px]"
      data-name="Toolbar/Pro"
      style={{ left: "calc(50% + 1.5px)" }}
    >
      <Toolbar />
      <HomeBarPro />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.33px_0px_0px_inset_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[#ffffff] h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[16px] text-left text-neutral-300 text-nowrap top-2.5">
          <p className="block leading-[normal] whitespace-pre">Enter your first name</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
    </div>
  );
}

function Frame71368() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left w-full">
        <p className="block leading-[normal]">First Name</p>
      </div>
      <EmailInput />
    </div>
  );
}

function Frame71370() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame71368 />
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="bg-[#ffffff] h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[16px] text-left text-neutral-300 text-nowrap top-2.5">
          <p className="block leading-[normal] whitespace-pre">Enter your last name</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
    </div>
  );
}

function Frame71369() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left w-full">
        <p className="block leading-[normal]">Last Name</p>
      </div>
      <EmailInput1 />
    </div>
  );
}

function Frame71371() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame71369 />
    </div>
  );
}

function CuidaCaretDownOutline() {
  return (
    <div className="absolute left-[314px] size-[15px] top-1/2 translate-y-[-50%]" data-name="cuida:caret-down-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="cuida:caret-down-outline">
          <path
            clipRule="evenodd"
            d={svgPaths.p35949240}
            fill="var(--fill-0, #222222)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function EmailInput2() {
  return (
    <div className="bg-[#ffffff] h-[41px] relative rounded-[5px] shrink-0 w-full" data-name="Email Input">
      <div className="h-[41px] overflow-clip relative w-full">
        <div className="absolute font-['Exo:Medium',_sans-serif] font-medium leading-[0] left-3.5 text-[#222222] text-[16px] text-left text-nowrap top-2.5">
          <p className="block leading-[normal] whitespace-pre">Brand Managament</p>
        </div>
        <CuidaCaretDownOutline />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#b4c4c5] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      />
    </div>
  );
}

function Frame71374() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Exo:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left w-full">
        <p className="block leading-[normal]">Department</p>
      </div>
      <EmailInput2 />
    </div>
  );
}

function Frame71372() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame71374 />
    </div>
  );
}

function Frame71373() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame71370 />
      <Frame71371 />
      <Frame71372 />
    </div>
  );
}

function CharmTick() {
  return (
    <div className="bg-[#fffdf3] relative rounded-[10px] shrink-0 size-5" data-name="charm:tick">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#f65820] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[8.575px] items-start justify-start p-0 relative shrink-0 w-[343px]"
      data-name="Checkbox"
    >
      <CharmTick />
      <div className="basis-0 font-['Exo:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[16.078px] text-left">
        <p className="block leading-[normal]">Stay logged in</p>
      </div>
    </div>
  );
}

function Frame71376() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame71373 />
      <Checkbox />
    </div>
  );
}

function Frame71366() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 translate-x-[-50%] translate-y-[-50%]"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.5px)" }}
    >
      <div className="flex flex-col font-['Exo:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f9fffc] text-[18px] text-center text-nowrap tracking-[0.36px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="h-[46px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Primary Button">
      <Frame71366 />
    </div>
  );
}

function Frame71378() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[45px] items-start justify-start left-[25px] p-0 top-[300px] w-[343px]">
      <div className="font-['Exo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#222222] text-[18.885px] text-left w-full">
        <p className="block leading-[normal]">LOGIN</p>
      </div>
      <Frame71376 />
      <PrimaryButton />
    </div>
  );
}

function Toolbar1() {
  return (
    <div className="h-[43.664px] relative shrink-0 w-full" data-name="Toolbar">
      <div
        className="absolute h-[21.918px] right-[18.61px] translate-y-[-50%] w-[22.335px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.304px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <path d={svgPaths.p3a3d5600} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[18.102px] right-[97.67px] translate-y-[-50%] w-[21.013px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.187px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
          <path d={svgPaths.p132d5500} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[22.966px] translate-x-[-50%] translate-y-[-50%] w-[18.062px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.98px)", left: "calc(50% + 0.495px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 23">
          <path d={svgPaths.p159ad870} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[17.685px] left-[103.19px] translate-y-[-50%] w-[9.952px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.232px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
          <path d={svgPaths.p112f7f80} fill="var(--fill-0, #CECECE)" id="Symbol" />
        </svg>
      </div>
      <div
        className="absolute h-[17.675px] left-[24.8px] translate-y-[-50%] w-[9.952px]"
        data-name="Symbol"
        style={{ top: "calc(50% - 0.237px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
          <path d={svgPaths.pf72b6f0} fill="var(--fill-0, #2E7CF6)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function HomeBarPro1() {
  return (
    <div className="h-[33.74px] relative shrink-0 w-[390px]" data-name="Home bar/Pro">
      <div
        className="absolute bg-[#000000] bottom-[8.67px] h-[4.962px] rounded-[99.237px] translate-x-[-50%] w-[137.939px]"
        data-name="Home Indicator"
        style={{ left: "calc(50% - 0.496px)" }}
      />
    </div>
  );
}

function ToolbarPro1() {
  return (
    <div
      className="absolute backdrop-blur-[10px] backdrop-filter bg-[rgba(249,249,249,0.94)] bottom-0 box-border content-stretch flex flex-col items-center justify-start left-0 pb-0 pt-[4.962px] px-0 w-[393px]"
      data-name="Toolbar/Pro"
    >
      <Toolbar1 />
      <HomeBarPro1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.33px_0px_0px_inset_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function StatusBarTime() {
  return (
    <div className="h-[21px] relative rounded-3xl shrink-0 w-[54px]" data-name="_StatusBar-time">
      <div className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] h-5 leading-[0] left-[27px] not-italic text-[#000000] text-[16px] text-center top-px tracking-[-0.32px] translate-x-[-50%] w-[54px]">
        <p className="adjustLetterSpacing block leading-[21px]">9:41</p>
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
  return (
    <div
      className="absolute bg-[#000000] h-[37px] rounded-[100px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-20"
      data-name="TrueDepth camera"
      style={{ left: "calc(50% - 22.5px)" }}
    />
  );
}

function FaceTimeCamera() {
  return (
    <div
      className="absolute bg-[#000000] rounded-[100px] size-[37px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="FaceTime camera"
      style={{ left: "calc(50% + 44px)" }}
    />
  );
}

function StatusBarDynamicIsland() {
  return (
    <div
      className="bg-[#000000] h-[37px] relative rounded-[100px] shrink-0 w-[125px]"
      data-name="StatusBar-dynamicIsland"
    >
      <TrueDepthCamera />
      <FaceTimeCamera />
    </div>
  );
}

function DynamicIsland() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-center justify-center p-0 relative shrink-0"
      data-name="Dynamic Island"
    >
      <StatusBarDynamicIsland />
    </div>
  );
}

function SignalWifiBattery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[78.401px]" data-name="Signal, Wifi, Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 13">
        <g id="Signal, Wifi, Battery">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" />
          </g>
          <path d={svgPaths.p36909200} fill="var(--fill-0, black)" id="Wifi" />
          <g id="_StatusBar-battery">
            <path d={svgPaths.pb6b7100} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p9c6aca0} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p2cb42c00} fill="var(--fill-0, black)" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Right Side">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center pl-0 pr-[11px] py-0 relative size-full">
          <SignalWifiBattery />
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[59px] items-end justify-center p-0 relative shrink-0 w-full"
      data-name="StatusBar"
    >
      <LeftSide />
      <DynamicIsland />
      <RightSide />
    </div>
  );
}

function Domain() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[3.969px] items-center justify-start leading-[0] overflow-clip p-0 text-[#000000] text-left text-nowrap top-[8.93px] translate-x-[-50%]"
      data-name="domain"
      style={{ left: "calc(50% - 0.084px)" }}
    >
      <div className="flex flex-col font-['SF_Compact_Display:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-[13.893px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">􀎡</p>
      </div>
      <div className="flex flex-col font-['Albert_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[14.885px] tracking-[-0.4168px]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          https://workerreports.mylamworld.org/...
        </p>
      </div>
    </div>
  );
}

function SearchTop() {
  return (
    <div className="h-[35.725px] relative shrink-0 w-[367.176px]" data-name="Search Top">
      <div className="absolute bg-[rgba(0,0,0,0.08)] inset-0 rounded-[9.924px]" data-name="input search" />
      <div
        className="absolute h-[17.845px] right-[8.87px] translate-y-[-50%] w-[14.644px]"
        data-name="reload"
        style={{ top: "calc(50% + 0.133px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
          <path d={svgPaths.p493c980} fill="var(--fill-0, black)" id="reload" />
        </svg>
      </div>
      <div
        className="absolute h-[12.237px] left-[10.04px] translate-y-[-50%] w-[18.56px]"
        data-name="aA"
        style={{ top: "calc(50% + 0.139px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 13">
          <path d={svgPaths.pe47280} fill="var(--fill-0, black)" id="aA" />
        </svg>
      </div>
      <Domain />
    </div>
  );
}

function SearchBarPro() {
  return (
    <div
      className="absolute backdrop-blur-[7.939px] backdrop-filter bg-[rgba(249,249,249,0.94)] box-border content-stretch flex flex-col gap-[6.947px] items-center justify-start left-0 pb-[9.924px] pt-0 px-0 right-0 top-0"
      data-name="Search Bar/Pro"
    >
      <StatusBar />
      <SearchTop />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#fffdf3] relative size-full" data-name="Login">
      <SearchBarPro />
      <Frame139 />
      <ToolbarPro />
      <div className="absolute h-0 left-[25px] top-[260px] w-[343px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line
              id="Line 1"
              stroke="var(--stroke-0, #929292)"
              strokeLinecap="round"
              x1="0.5"
              x2="342.5"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame71378 />
      <ToolbarPro1 />
    </div>
  );
}