function guardaInformacion() {
    //guarda la info en la bd
   var nombre = nombreTextField.text;
    var edad = edadTextField.text;
    db.transaction(function(tx){
       var sql = 'INSERT INTO persona (nombre,edad) VALUES (\''
       + nombre + '\',' + edad + ')';
        tx.executeSql(sql);
    });
    //regresamos a la lista de personas
    stackView.push(dataForm);
}