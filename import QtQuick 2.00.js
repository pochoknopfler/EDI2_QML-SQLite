import QtQuick 2.0
import QtQuick.Controls 2.1
import QtQuick.LocalStorage 2.0
import 'InputFormJS.js' as InputFormJS

Item {
 anchors.fill:parent
 id: parentObject

 Column {
     spacing: 2
     anchors.fill: parent
     Row{
         spacing: 2
         Label {
             id: nombreLabel
             text: 'Nombre'
         }
         TextField {
             id: nombreTextField
             width: parentObject.width - nombreLabel.width
         }
     }
     Row{
         spacing: 2
         Label {
             id: edadLabel
             text: 'Edad'
         }
         TextField {
             id: edadTextField
             width: parentObject.width - edadLabel.width
         }
     }
     Button {
         id: guardarButton
         text: 'GUARDAR'
         width: parent.width
         height: 50
         onClicked: {
             InputFormJS.guardaInformacion();

         }
     }

     Button {
         id: atrasButton
         height: 50
         width: parent.width
         text: 'ATRÁS'
         onClicked: {
            stackView.push(dataForm);
         }
     }
  }
}