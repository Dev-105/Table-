function Cmd(time = 1000) {
            let boot = document.createElement('link');
            boot.rel = "stylesheet";
            boot.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css";
            let tailwind = document.createElement('script');
            tailwind.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
            document.head.appendChild(boot);
            document.head.appendChild(tailwind);
            let cmd = `<div id="cmd" class="bg-gray-950 overflow-hidden border-3 border-blue-400 w-11/12 rounded-2xl h-11/12 fixed z-50 -bottom-1 right-1/2 translate-x-1/2 text-gray-300">
        <div class="up bg-neutral-700 flex justify-between ">
            <div class="left pl-4 flex items-end gap-7">
                <div class="black rounded-t-xl bg-gray-950 h-9/12 w-70 flex justify-between items-center px-4">
                    <div class="left flex items-center gap-2">
                        <div class="logo border border-t-2 bg-linear-to-br  from-gray-700 to-black w-5 h-4 text-[6px] text-center">
                            C:\__
                        </div>
                        <p class="font-bold text-[15px] ">Command Prompt</p>
                    </div>
                    <i class="text-[14px] text-shadow-white text-shadow-2xs bi bi-x-lg"></i>
                </div>
                <div class="plus pb-2 gap-3 flex items-center">
                    <i class="bi bi-plus-lg text-shadow-white text-white text-[16px]"></i>
                    <div class="btw border-l h-7 border-neutral-500"></div>
                    <i class="bi bi-chevron-down text-shadow-white text-white text-[12px]"></i>
                </div>
            </div>
            <div class="right flex">
                <i class="hover:bg-gray-50/10 text-[14px] py-4 px-6 text-shadow-white text-shadow-2xs bi bi-dash-lg"></i>
                <i class="hover:bg-gray-50/10 text-[12px] py-4 px-6 text-shadow-white text-shadow-2xs bi bi-square"></i>
                <i class="hover:bg-red-600/55 text-[14px] py-4 px-6 text-shadow-white text-shadow-2xs bi bi-x-lg"></i>
            </div>
        </div>
        <div class="text-gray-300 font-mono p-4 text-xl">
            <p>Microsoft Windows [Version 10.0.26200.6901]</p>
            <p class="mb-4">(c) Microsoft Corporation. All rights reserved.</p>
            <span>C:\Users></span> <input type="text" autofocus class="bg-transparent border-none outline-none text-xl">
        </div>
    </div>`;
            function isPcScreen() {
  return window.innerWidth >= 1024; // true if screen width >= 1024px
}
    if(isPcScreen()){
                setTimeout(() => {
        document.body.insertAdjacentHTML('beforeend', cmd);
    }, time);
    setTimeout(() => {
            let cmdInput = document.getElementById('cmd');
            cmdInput.remove();
        }, time + 500);
    }
        }
