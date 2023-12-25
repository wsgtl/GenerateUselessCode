
//随机方法
const funs = [`
private static void __funName() {
    Integer __var1 = 0;
    for(Integer __var2 =0; __var2 < 10; __var2++) {
        __var1 += __var2;
    }
}

`, `
public static void __funName() {
    Integer __var1 = __num2+__num;
    for(Integer __var2 =0; __var2 < 3; __var2++) {
        __var1 += __var2;
        Integer __var3 = __num3*__num1;
    }
}

`,`
public static void __funName() {
    Integer __var1 = __num2+__num;
    for(Integer __var2 =0; __var2 < 2; __var2++) {
        __var1 += __var2;
        String __str1 = "__str2";
        String __str2 = "__num2"+"__var1";
        String __str3 = __str2 + "__var3";
    }
}

`,`
public static void __funName() {
    Integer __var1 = __num2+__num;
    for(Integer __var2 =0; __var2 < 2; __var2++) {
        __var1 += __var2;
        String __str1 = "__str2";
        Integer __str2 = __var1+__var2;
        String __str3 = __str2 + "__var3";
        __str2 += __num3;
    }
    String __str3__str1 = "__str2" + "__var3";
}

`,`
public static String  __funName() {
    String __var1 = "__str1";
    return __var1;
}

`,  `
public static String  __funName() {
    String __var3 = "__str1"+"__var1";
    return __var3 + "__var2"+"__str1";
}

`,`
private static String  __funName() {
    String __var3 = "__str1";
    Integer __var1 = 0;
    for(Integer __var2 =0; __var2 < 10; __var2++) {
        __var1 += __num2;
    }
    return __var1+"__str3";
}

`,  `
protected static String  __funName() {
    String __var1 = "__str1";
    String __var2 = "__str2";
    String __var3 = "__str3";
    return __var1 + __var2 +__var3;
}
`,  `
protected static String  __funName() {
    String __var1 = "__str1__num";
    Integer __var3__str1 = 0;
    for(Integer __var2 =0; __var2 < 10; __var2++) {
        __var1 -= __num2;
        Integer __var1__var2 = __var1 - __num2;
    }
    String __var2 = "__str2__num1";
    String __var3 = "__str3";
    return __var1 + __var2;
}
`, `
protected static String  __funName() {
    String __var1 = "hi23432";
    String __var2 = "iouiouiouiouiue";
    __var1 += "__str2";
    __var2 += "jklytjilklcvkxcvkjckvjcxjv";
    __var1 += "343df";
    __var2 += "__str1";
    __var1 += "iuioeur";
    __var2 += "__str2";
    __var1 += "cfsdf";
    __var2 += "__str3";
    return __var1 + __var2;
}
`,`
private static Integer __funName() {
    Integer __var1 = __num;
    switch (__var1) {
        case 1:return 3;
        case 2:return __num1;
        case 3:return __num;
        case 4:return __num2;
        case 5:return __num4;
        case 6:return __num3;
        case 7:return __num5;

    }
    return 89809;
}

`, `
private static Integer  __funName() {
    Integer __var1 = __num;
    if(__var1 == 1) {
        return  1;
    } else if(__var1 == 2) {
        return  2;
    }else if(__var1 == 3) {
        return  3;
    }else if(__var1 == 4) {
        return  4;
    }else {
        return 5;
    }
}
`, `
private static Integer  __funName() {
    Integer __var1 = __num;
    Integer __var2 = __num*__num;

    if(__var1 == 1) {
        return  __num2;
    } else if(__var2 == 2) {
        return  __num5;
    }else if(__var1 == 3) {
        return  __num4;
    }else if(__var2 == 4) {
        return  __num2;
    }else if(__var2 == 5) {
        return  4;
    }else if(__var2 == 6) {
        return  __num1;
    }else if(__var1 == 7) {
        return  __num;
    }else if(__var2 == 8) {
        return  465;
    }else if(__var1 == 9) {
        return  __num3;
    }else if(__var2 == 10) {
        return  46565;
    }else if(__var1 == 11) {
        return  __num1;
    }else if(__var2 == 12) {
        return  488;
    }else if(__var2 == 4) {
        return  __num2;
    }else if(__var2 == 4) {
        return  __num5;
    }else if(__var2 == 4) {
        return  344;
    }
    return 5;
}
`, `
private static Integer  __funName() {
    Integer __var1 = __num;
    Integer __var2 = __num - 23;
    if(__var1 == 1) {
        return  __num5;
    } else if(__var1 == 2) {
        return  __num2;
    }else if(__var1 == 3) {
        return  3;
    }else if(__var1 == 4) {
        return  __num3;
    }else {
        return 5;
    }

    switch (__var2) {
        case 1:return 3;
        case 2:return __num;
        case 3:return __num1;
        case 4:return 6767;
        case 5:return __num1;
        case 6:return __num4;
        case 7:return __num2;
        case 9:return 87987;
        case 10:return __num3;
        case 11:return __num5;

    }
    return __num;
}
`,`private static void __funName() {
    Integer __var1 = __num;
    for(Integer __var2 =0; __var2 < 10; __var2++) {
        __var1 += __var2;
    }
    Integer __var3 = __num;
    if(__var1 == __num) {
        __var1 +=__num4;
    } else if(__var1 == __num2) {
        __var1 +=__num5;
    }else if(__var1 == 3) {
        __var3 +=__num1;
    }else if(__var1 == __num3) {
        __var1 +=__num2;
    }else {
        __var3 +=__num3;
    }
}

`,`private static void __funName() {
    Integer __var1 = __num;
    for(Integer __var2 =0; __var2 < __num; __var2++) {
        __var1 += __num2;
    }
    String __var3 = "__str1";
    if(__var3 == "__str2") {
        __var1 -=__num4;
    } else if(__var1 == __num2) {
        __var1 =__num2;
    }else if(__var1 == 3) {
        __var3 +="dfudifd";
    }else if(__var1 == __num3) {
        __var1 -=__num2;
    }else {
        __var3 ="__str2";
    }
}

`,`private static void __funName() {
    String __var1 = "__str1";
    String __var3 = "__str1";
    String __var2 = "__str2";
    String __str1 = __var2;
    String __str2 = __var1;
    String __str3 = __var3;
    __var1 = __var2 == "ddkfjdk" ? "uiv343" : "__str2";
    Integer __var1__var2 = __num;
    __var1__var2 += 3;
}
`,`private static void __funName() {
    Integer __var1__var2 = __num;
    __var1__var2 += 3;
    String __var3 = "__str1";
    String __var2 = "__str2";
    String __str1 = "__var2";
    String __str2 = "__var1";
    String __var1 = "__str1";
    String __str3 = __var3;
    __var1 = __var2 == "ddkfjdk" ? "uiv343" : "__str2";
   
}
`,`private static void __funName() {
    String __var3 = "__str1";
    String __var2 = "__str2";
    String __str1 = "__var2";
    String __var1 = "__str1";
    Integer __var1__var3 = __num;
    __var1__var3 += 3;
    __var1 = __var2 == "__str3" ? __str1 : "__str2";
    String __str2 = "__var1";
   
    String __str3 = __var3;
    
    __str3+="__str1";
    __str2+="__str3";
}
`,`private static void __funName() {
    Integer __var1 = __num;
    String __var3__var1 = "__str1";
    String __str2 = "__str2";
    String __str1 = "__var2";
    Integer __var1__var3 = __num;
    for(Integer __var2 =0; __var2 < __num; __var2++) {
        __var1 += __num2;
    }
    String __var3 = "__str1";
    if(__var3 == "__str2") {
        __var1 -=__num4;
    } else if(__var1 == __num2) {
        __var1 =__num2;
    }else {
        __var3 ="__str2";
    }
}

`,`private static Integer __funName() {
    Integer __var1__str1 = __num;
    String __var3__var1 = "__str1";
    String __str2 = "__str2";
    String __str1 = "__var2";
    Integer __var1__var3 = __num;


    Integer __var1 = __num2;
    Integer __var2 = __num3*__num4;

    if(__var1 == 1) {
        return  __num2;
    } else if(__var2 == 2) {
        return  __num5;
    }else if(__var1 == 3) {
        return  __num4;
    }else if(__var2 == 4) {
        return  __num2;
    }else if(__var2 == 5) {
        return  4;
    }else if(__var2 == 6) {
        return  __num1;
    }else if(__var1 == 7) {
        return  __num;
    }else if(__var2 == 8) {
        return  465;
    }else if(__var1 == 9) {
        return  __num3;
    }else if(__var2 == 10) {
        return  __num1*__num2;
    }else if(__var1 == 11) {
        return  __num1;
    }else if(__var2 == 12) {
        return  488;
    }
    return __num3;
}

`,`
private static Integer __funName() {
    Integer __var1 = __num;
    Integer __var1__str1 = __num;
    String __var3__var1 = "__str1";
    String __str2 = "__str2";
    String __str1 = "__var2";
    Integer __var1__var3 = __num;

    switch (__var1) {
        case 1:return 3*__num;
        case 2:return __num1;
        case 3:return __num;
        case 4:return __num2;
        case 5:return __num4;

    }
    return __num1*__num2;
}

`,`
private static Integer __funName() {
    Integer __var1 = __num;

    String __var3__var1 = "__str1";


    switch (__var1) {
        case __num1:
            return 3*__num;
        case 2:
            return __num1;
        case 323:s
            return __num;
        case 423:
            return __num2;
        case __num2:
            return __num4;

    }
    String __str2 = "__str2";
    String __str1 = "__var2";
    Integer __var1__var3 = __num;
    Integer __var1__str1 = __num;
    return __var1__str1*__var1__var3;

}
`,`
private static Integer __funName() {
    Integer __var1 = __num;

    String __var3__var1 = "__str1";


    switch (__var1) {
        case __num1:
            return 4544*__num;
        case 2:
            return __num1;
        case 323:
            return __num;

    }
   
    Integer __var1__var3 = __num;
    Integer __var1__str1 = __num;
    Integer __var2 = __num3;
    switch (__var2) {
        case __num1:
            return 3*__num;
        case __num2:
            return __num1;
        case __num3:
            return __num2;
        case __num4:
            return __num*__num3;
        case 323:
            return __num3;

    }
    String __str2 = "__str2";
    return __var1__str1*__var1__var3;
    

}
`
];
module.exports = funs;
