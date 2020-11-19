function ejecutaConfiguracionInicial(){
    // crea la instancia del objeto de bd
    db = LocalStorage.openDatabaseSync(dbId, dbVersion, dbDescription, dbSize);
    //configura una tabla dentro de la bd
    db.transaction(function(tx) {
    var sql = 'CREATE TABLE IF NOT EXISTS persona '
    + '(id INTEGER PRIMARY KEY AUTOINCREMENT, '
    + 'nombre TEXT NOT NULL, edad INTEGER NOT NULL)';
    tx.executeSql(sql);
    });
}