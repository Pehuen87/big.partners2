

export class Banner {
    constructor(img, titulo, parrafo, modal,  parent) {
        this.img = img;
        this.parrafo = parrafo;
        this.modal  = modal;
        this.titulo = titulo;
        this.parent = parent;
        this.created= false;
    }

    create() {
        if(this.created){
            console.log('Banner ya creado');
            return; 
        }else{
            var head = document.getElementsByTagName('HEAD')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'js/modules/banner.css';
            head.appendChild(link);


            let bannerElem = document.createElement('div');
            let titleElem = document.createElement('h1');
            let imgWrapper = document.createElement('div');
            let textWrapper = document.createElement('div');
            let imgElem = document.createElement('img');
            let pElem = document.createElement('p');
            let modalControl = document.createElement('div');
            let modalButton = document.createElement('button');

            
            bannerElem.id = 'banner';
            imgElem.src = this.img;
            titleElem.innerHTML= this.titulo;
            pElem.innerHTML = this.parrafo;

            modalButton.innerHTML = this.modal.titulo;
            modalControl.classList.add('modal__control');
            modalButton.classList.add('interactiveButton', 'modal__label--show');

            this.parent.appendChild(bannerElem);
                bannerElem.appendChild(imgWrapper);
                    imgWrapper.appendChild(imgElem);
                bannerElem.appendChild(textWrapper);
                    textWrapper.append(titleElem, pElem, modalControl);
                    modalControl.appendChild(modalButton);

            modalButton.addEventListener('click', () => {  this.modal.show();})
            

            this.created = true;
                

        }
    
    }
}