/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var images_tab =['./assets/gif1.png','./assets/gif2.png','./assets/gif3.png','./assets/gif4.png','./assets/gif5.png','./assets/gif6.png','./assets/gif7.png','./assets/gif8.png'];
var i =-1;

var ImageBox = React.createClass({
  loadImage: function() {
      i = i+1;
      var j = i % images_tab.length;
      this.setState({image:images_tab[j]});
  },
  getInitialState: function() {
    console.log('test')
    return {image: ''};
  },
  componentDidMount: function() {
    this.loadImage();
    setInterval(this.loadImage, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="imageBox">
        <img className="iphone_screenshot" src={this.state.image} alt="Iphone"/>
      </div>
    );
  }
});


ReactDOM.render(
  <ImageBox pollInterval={4000} />,
  document.getElementById('imagedefilement')
);
