export function openModal() {
    if (typeof window !== 'undefined') {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.showModal();
        }
    }
}

export function closeModal() {
    if (typeof window !== 'undefined') {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    }
}

export function cameraAccessControl(allowed) {
    // Check if the browser supports WebRTC
    if (allowed) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request permission to access the camera
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    // User has granted permission to use the camera
                    // You can now use the camera stream for your application
                    // For example, display it in a video element
                    console.log("Allowed")
                    const videoElement = document.getElementById('camera-preview');
                    if (videoElement) {
                        videoElement.srcObject = stream;
                    }
                })
                .catch(function (error) {
                    // User has denied or the browser does not support camera access
                    console.error('Error accessing the camera:', error);
                });
        } else {
            // Browser does not support WebRTC
            console.error('WebRTC is not supported in this browser.');
        }
    }

}
