

export class Modal {
    constructor(titulo, parrafo,  parent) {
        this.parrafo = parrafo;
        this.titulo = titulo;
        this.parent = parent;
        this.created= false;
    }

    create() {
        if(this.created){
            console.log('Modal ya creado');
            return; 
        }else{
            let head = document.getElementsByTagName('HEAD')[0];
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'js/modules/modal.css';
            head.appendChild(link);

            let modalWrapper = document.createElement('div');
            let modalElem = document.createElement('div');
            let titleElem = document.createElement('h2');
            let pElem = document.createElement('p');
            let modalButton = document.createElement('button');

            
            modalWrapper.id = 'modal';
            modalElem.id = 'modal__content';
            titleElem.innerHTML= this.titulo;
            pElem.innerHTML = this.parrafo;

            modalButton.innerHTML = "Cerrar Ventana";
            modalButton.classList.add('interactiveButton', 'modal__label--close');

            this.parent.appendChild(modalWrapper);
                modalWrapper.appendChild(modalElem);
                    modalElem.append(titleElem, document.createElement('br'), pElem, modalButton );

            modalButton.addEventListener('click', () => {  this.hide();})

                

            this.created = true;
                

        }

    
    }

    show(){
        $('#modal').css({ top: '0' });
    }

    hide(){
        $('#modal').css({ top: '-100%' });
    }
    
}