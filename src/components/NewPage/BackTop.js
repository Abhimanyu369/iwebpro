
const BackTop = () => {

    var ScrollTop = document.getElementsByClassName('.abc');
    var BackTop = document.getElementsByClassName('.back-to-top');

    // if (window.scrollY > 700) {
      // ScrollTop.addClass('active');
      // document.getElementById('#list').addClass('test');
      // BackTop.
    // }
    // else {
      // BackTop.fadeOut();
    // }
  
  
  return (
    <>
      <a href="# " className="back-to-top" id="backTop">
          <span className="back-top text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg></span>
      </a>
    </>
  )
}

export default BackTop; 