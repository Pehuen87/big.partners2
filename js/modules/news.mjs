


export class News {
    constructor(titulo, img, alt, parrafo) {
        this.img = img;
        this.alt = alt;
        this.titulo = titulo;
        this.parrafo = parrafo;
    }

    create(parent) {

        let liElem = document.createElement('li');
        let titleElem = document.createElement('h3');
        let imgElem = document.createElement('img');
        let pElem = document.createElement('p');

        liElem.classList.add('splide__slide');
        imgElem.src = this.img;
        imgElem.alt = this.alt;
        titleElem.innerHTML = this.titulo;
        pElem.innerHTML = this.parrafo;

        parent.appendChild(liElem);
        liElem.appendChild(titleElem);
        liElem.appendChild(document.createElement('br'));
        liElem.appendChild(imgElem);
        liElem.appendChild(document.createElement('br'));
        liElem.appendChild(pElem);

    }
}

export class NewsFeed {
    constructor(news, parent) {
        this.news = news;
        this.parent = parent;
        this.created = false;
    }


    create() {

        if (this.created) {
            console.log('News Feed already created');
            return;
        } else {

            var head = document.getElementsByTagName('HEAD')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'js/modules/news.css';
            head.appendChild(link);

            let section = document.createElement('section');
            let track = document.createElement('div');
            let list = document.createElement('ul');

            this.parent.appendChild(section);
            section.appendChild(track);
            track.appendChild(list);



            section.classList.add('splide');
            section.id = 'image-carousel';

            track.classList.add('splide__track');

            list.classList.add('splide__list');

            this.news.map(e => e.create(list));

            new Splide('#image-carousel', {
                arrows: false,  //no display of arrows 
                perPage: 3,     //on media > 640 shows all 3 slides, acting like 3 columns 
                pagination: false, //no diplay of dots
                mediaQuery: 'max',
                breakpoints: {
                    640: {
                        perPage: 1, //on media < 640 shows only 1 slide per page. 
                    }
                }
            }).mount();

            this.created = true;

        }





    }
}








