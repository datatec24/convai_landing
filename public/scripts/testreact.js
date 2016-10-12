
var images_tab =['./assets/question.png','.assets/shop.png'];
var i =-1;

var ImageBox = React.createClass({
  render: function() {
    return (
      <div className="imageBox">
        <img className="iphone_screenshot" src={'./assets/question.png'} alt="Iphone"/>

      </div>
    );
  }
});

ReactDOM.render(
  <ImageBox/>,
  document.getElementById('imagedefilement')
);
