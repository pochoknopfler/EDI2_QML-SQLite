function cargaInformacion() {
    //lee la info de la tabla persona
    db.transaction(function(tx){
        var sql = 'SELECT id, nombre, edad FROM persona';
        var rs = tx.executeSql(sql);
        var myid; //id de la persona
        var mynombre; // nombre de la persona
        var myedad; //edad de la persona
        var ix;
        for (ix = 0; ix < rs.rows.length; ++ix){
            myid = rs.rows.item(ix).id;
            mynombre = rs.rows.item(ix).nombre;
            myedad = rs.rows.item(ix).edad;
            personasListView.model.append({
            id : myid,
            nombre: mynombre,
            edad: myedad
         });
        }
    });
}
