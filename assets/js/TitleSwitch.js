document.addEventListener('DOMContentLoaded', (event) => {
    let titles = ["Creative Producer", "Technical Artist"];
    let currentIndex = 0;
  
    const jobTitleElement = document.getElementById('job-title');
  
    function switchTitle() {
      // Add class to start animation
      jobTitleElement.classList.add('fade-out');
  
      // Set a timeout to change the text when the element is invisible
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        jobTitleElement.textContent = titles[currentIndex];
      }, 250); // Assuming the text should change halfway through the animation
  
      // Remove the animation class at the end of the animation to reset
      setTimeout(() => {
        jobTitleElement.classList.remove('fade-out');
        jobTitleElement.style.animation = '';
      }, 500); // Match this with the total duration of the animation
    }
  
    setInterval(switchTitle, 3000); // Adjust as needed
  });
  