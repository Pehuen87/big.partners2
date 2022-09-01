

export class VideoFullWidth {
    constructor(video, poster, titulo, parent) {
        this.video = video;
        this.poster = poster;
        this.titulo = titulo;
        this.parent = parent;
        this.created= false;
    }

    create() {

        if (this.created) {
            console.log('Video already created');
            return;
        } else {
            var head = document.getElementsByTagName('HEAD')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'js/modules/header.css';
            head.appendChild(link);

            let divWrapper = document.createElement('div');
            let videoElem = document.createElement('video');
            let titleWrapper = document.createElement('div');
            let titleElem = document.createElement('h1');
            let iElem = document.createElement('i');


            this.parent.appendChild(divWrapper);
                divWrapper.appendChild(videoElem);
            this.parent.appendChild(titleWrapper);
                titleWrapper.appendChild(titleElem);
            this.parent.appendChild(iElem);

            divWrapper.classList.add('header');

            videoElem.id = "videoFullWidth";
            videoElem.src = this.video;
            videoElem.poster = this.poster;
            videoElem.muted = true;
            videoElem.autoplay = true;

            titleWrapper.id = "videoFullWidth__title";
            titleElem.innerHTML = this.titulo;

            iElem.classList.add('fa-solid','fa-volume-high');
            iElem.id = "videoFullWidth__volume";


            $("#videoFullWidth__volume").click(function () {
                if ($("#videoFullWidth").prop('muted')) {
                    $("#videoFullWidth").prop('muted', false);
                    $(this).removeClass('fa-volume-high');//removing class icon 
                    $(this).addClass('fa-volume-xmark'); // changing icon for button
        
                } else {
                    $("#videoFullWidth").prop('muted', true);
                    $(this).removeClass('fa-volume-xmark'); //removing class icon 
                    $(this).addClass('fa-volume-high');// changing icon for button
                }
            });
        

            this.created = true;

            }


        }
    }








