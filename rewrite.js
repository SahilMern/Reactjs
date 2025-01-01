function abc() {
    console.log(abc.xyz);
}
abc(); // First call
abc.xyz = 400;
abc.xyz = 200;
abc(); // Second call //Output:-undefined 200



