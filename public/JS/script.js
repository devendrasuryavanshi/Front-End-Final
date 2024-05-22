// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

function hidePanel() {
    document.querySelector(".news-panel").style.display = "none";
    document.querySelector("#show-panel-btn").style.display = "inline-block";

}

function showPanel() {
    document.querySelector(".news-panel").style.display = "block";
    document.querySelector("#show-panel-btn").style.display = "none";

}

function fullScreen(element) {
    var postView = document.querySelector('.post-view');
    var textView = document.querySelector('.text-view');
    var textContent = element.querySelector('.text').innerText;

    // Clear existing content
    postView.innerHTML = '';
    textView.innerText = textContent;

    // Get the background image URL
    var backgroundImageUrl = element.querySelector('.card-visual').style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");

    // Check if it's an image or a video
    if (backgroundImageUrl) {
        // Create and append image element
        var img = document.createElement('img');
        img.src = backgroundImageUrl;
        img.classList.add('w-full', 'h-full', 'object-cover', 'rounded-lg');
        postView.appendChild(img);
    } else {
        // Get the video URL
        var videoUrl = element.querySelector('.card-visual').getAttribute('data-video');

        // Create and append video or iframe element
        if (videoUrl) {
            if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                // If it's a YouTube video
                var videoId = getYouTubeVideoId(videoUrl);
                var iframe = document.createElement('iframe');
                iframe.src = 'https://www.youtube.com/embed/' + videoId;
                iframe.classList.add('w-full', 'h-full');
                iframe.setAttribute('allowfullscreen', true);
                postView.appendChild(iframe);
            } else {
                // If it's a direct video URL
                var video = document.createElement('video');
                video.src = videoUrl;
                video.classList.add('w-full', 'h-full', 'object-cover');
                video.setAttribute('controls', true);
                postView.appendChild(video);
            }
        }
    }

    // Show float-post-viewer
    document.querySelector('.float-post-viewer').classList.remove('hidden');
}

document.querySelector('.float-post-viewer').addEventListener('click', function(event) {
    if (!event.target.closest('.post-view') && !event.target.closest('.text-view')) {
        this.classList.add('hidden');
    }
});

// Function to extract YouTube video ID from URL
function getYouTubeVideoId(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return null;
    }
}

function showMenuPanel() {
    if(document.querySelector(".menu-panel").style.display == "none"){
        document.querySelector(".menu-panel").style.display = "block";
    }
    else{
        document.querySelector(".menu-panel").style.display = "none";
    }


}