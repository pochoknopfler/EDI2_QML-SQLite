import QtQuick 2.0
import QtQuick.Controls 2.1
import QtQuick.LocalStorage 2.0
import 'DataFormJS.js' as DataFormJS

//aca se muestra la info
Item {
    anchors.fill: parent
    Component.onCompleted: {
        DataFormJS.cargaInformacion();
    }
    ListView {
        id: personasListView
        spacing: 15
        anchors {
         left: parent.left
         right: parent.right
         top: parent.top
         bottom: atrasButton.top
        }
        model: ListModel {}

        delegate: Text {
            anchors{
            left: parent.left
            right: parent.right
            }

            font.pointSize: 20
            horizontalAlignment: Text.AlignHCenter
            text: 'ID: ' + id + '\n' + 'NOMBRE: ' + nombre + '\n' + 'EDAD: ' + edad
        }
    }
    Button{
        id: atrasButton
        text: 'ATRÁS'
        anchors{
            left: parent.left
            right: parent.right
            bottom: parent.bottom
        }
        onClicked: {
            stackView.push(inputForm);

        }
    }
}