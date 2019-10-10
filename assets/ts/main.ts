interface Example {
    symfonyName: string;
    vueName: string;
}

function helloWorld (example: Example) {
    let str = 'Hello from: '+example.symfonyName + " " + example.vueName,
        style = ['padding: 1rem;',
                'background: linear-gradient( #35495e, #42b983);',
                'line-height: 1.5;',
                'font-size: 20px;',
                'color: white;'].join(''),
        styles = [
            'background: #42b983',
            'background: #42b983',
            'background: #42b983',
            'background: #42b983',
            'background: #42b983',
            'background: #42b983',
        ];

    console.log ( '%c%s', style, str );
    console.log ('%c S %c T %c I %c K %c O %c V ', styles[0], styles[1], styles[2], styles[3], styles[4], styles[5]);
}

let exampleUser = { symfonyName: "Symfony 4.x", vueName: "Vue + Vuex + TypeScript" };

helloWorld (exampleUser);