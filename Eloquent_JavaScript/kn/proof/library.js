function contarletras(palabra, letra) {
    let contada = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra) {
            contada += 1;
        }
    }
    return contada;
}