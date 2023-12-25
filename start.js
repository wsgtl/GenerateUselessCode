const funs = require('./fun.js'); 
// 1、加载 fs 模块对象
const fs = require('fs');
// const toPath = '/project/GenerateUselessCode/test/';
const toPath = '/project/wsgtl/Qokori/native/engine/android/app/src/com/confound/';
const packageName = "com.confound";
const codeNum = 500;


function start() {
    const readStr = fs.readFileSync('example.txt');
    const exampleStr = readStr.toString();
    const readStr2 = fs.readFileSync('example2.txt');
    const exampleStr2 = readStr2.toString();

    const exists = fs.existsSync(toPath);
    if (!exists)
        fs.mkdirSync(toPath);


    const addFunArr = [];
    for (let i = 0; i < codeNum; i++) {//随机生成废java代码
        let e = exampleStr2;
        const className = getRandomStr("Z");
        const startFun = getRandomStr("s");
        e = e.replaceAll("__className", className);
        e = e.replaceAll("__packageName", packageName);
        e = e.replaceAll("__startFun", startFun);
        addFunArr.push(className + `.${startFun}();\n`);
        const exampleFun = getRandomFun();
        e = e.replaceAll("__addFun", exampleFun.addFun);
        e = e.replaceAll("__otherFun", exampleFun.otherFun);

        
        fs.writeFileSync(toPath + className + '.java', e);
    }

    //生成AExample.java,调用其他生成的废代码
    let e = exampleStr;
    const className = "AExample";
    e = e.replaceAll("__className", className);
    e = e.replaceAll("__packageName", packageName);
    e = e.replaceAll("__addFun", timeFun(addFunArr));
    fs.writeFileSync(toPath + className + '.java', e);

}





function getRandomStr(start = '') {
    const num = random(3, 10);
    for (let i = 0; i < num; i++) {
        i += []
    }
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const maxPos = chars.length;
    let character = start + chars.charAt(Math.floor(Math.random() * 40));
    for (let i = 0; i < num; i++) {
        character += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return character;
}

/**获取随机整数 */
function random(m, n) {
    if (typeof m != "number" || typeof n != "number") return;
    let max = n;
    let min = m;
    if (m > n) {
        max = m; min = n;
    }
    let value = max - min + 1;
    return Math.floor(Math.random() * value) + min;
}

/**生成随机方法 */
function getRandomFun() {
    const _funs = funs;
    const num = random(0, 30);
    let addFun = "", otherFun = "",startFun="";
    for (let i = 0; i < num; i++) {
        let f = _funs[random(0, _funs.length - 1)];
        const funName = getRandomStr("f");
        f = f.replaceAll("__funName", funName);
        f = f.replaceAll("__var1", getRandomStr("v1"));
        f = f.replaceAll("__var2", getRandomStr("v2"));
        f = f.replaceAll("__var3", getRandomStr("v3"));
        f = f.replaceAll("__num", random(0, 10));
        f = f.replaceAll("__num1", random(0, 1000));
        f = f.replaceAll("__num2", random(0, 1000));
        f = f.replaceAll("__num3", random(0, 1000));
        f = f.replaceAll("__num4", random(0, 1000));
        f = f.replaceAll("__num5", random(0, 1000));
        f = f.replaceAll("__str1", getRandomStr());
        f = f.replaceAll("__str2", getRandomStr());
        f = f.replaceAll("__str3", getRandomStr());
        addFun += funName + "();\n";
        otherFun += f;
    }
    return { addFun, otherFun,startFun };
}
/**生成定时方法 */
function timeFun(arr) {
    if (!arr?.length) return "";
    const timeStr = `
    timer.schedule(new TimerTask() {
        @Override
        public void run() {
            System.out.println("时间到，执行任务__num");
            __fun
        }
    },__time);
    `;
    let taskIndex = 1;
    let funStr = "";
    let addFun = "";
    for (let i = 0; i < arr.length; i++) {
        funStr += arr[i];
        if (i % 30 != 29) continue;
        let ts = timeStr;
        ts = ts.replace("__num", taskIndex);
        ts = ts.replace("__fun", funStr);
        ts = ts.replace("__time", taskIndex * 1000);
        funStr = "";
        addFun += ts;
        taskIndex++;
    }
    if (funStr) {
        let ts = timeStr;
        ts = ts.replace("__num", taskIndex);
        ts = ts.replace("__fun", funStr);
        ts = ts.replace("__time", taskIndex * 1000);
        addFun += ts;
    }


    return addFun;
}


start();