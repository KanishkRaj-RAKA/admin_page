document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('sidebarToggle');

    // Check initial viewport width to determine sidebar visibility
    if (window.innerWidth < 500) {
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.remove('hide');
    }

    // Toggle sidebar visibility on button click
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('hide');
    });

    // Adjust sidebar visibility on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 500) {
            sidebar.classList.remove('hide');
        } else {
            sidebar.classList.add('hide');
        }
    });
});

