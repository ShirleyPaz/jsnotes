// Adicionar uma nova nota ao clicar no botão "concluído"


// criar array de notas
notes = [];


//atualizar seção com notas logo após adição ou exclusão de notas
function sectionUpdate (section) {
    var content = "";

    for (var index = 0; index < notes.length; index++) {
        content += '<form class="note">'+
                        '<button class="note__control" type="button" onclick="onRemoveClick(this.form.parentElement, '+index+')">' +
                            'x' +
                        '</button>' +
                        '<h1 class = "note__title">'+ notes[index].title +'</h1>'+
                        '<p class = "note__body">'+ notes[index].textarea +'</p>'+
                     '</form>';

    }

    section.innerHTML = content;

}


function onDoneClick(form, section, title, textarea) {

// criar objeto com conteúdo do form
var note = {
    title: title.value,
    textarea: textarea.value,
};

// adicionar objeto no array
notes.push(note);

// atualizar tela / section
sectionUpdate(section); 

// limpar formulário
form.reset();

console.log(notes);

}


function onRemoveClick(section, index) {

// dentro do array, encontrar posição da nota que desejo excluir e informar quantas desejo excluir
    notes.splice(index,1);

// atualizar seção
sectionUpdate(section);

console.log(notes);
}




