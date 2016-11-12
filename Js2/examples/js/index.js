function Slider(slidesArray)
{
    this.slidesArray = slidesArray;
    this.activeSlide = 0;
    this.slidesArray[this.activeSlide].isActive = true;

    this.nextSlide = function()
    {
        this.getActiveSlide().isActive = false;
        this.activeSlide = ++this.activeSlide % this.slidesArray.length;
        this.getActiveSlide().isActive = true;
    };

    this.prevSlide = function()
    {
        this.getActiveSlide().isActive = false;
        this.activeSlide--;
		if (this.activeSlide < 0)
			this.activeSlide = slidesArray.length - 1;
        this.getActiveSlide().isActive = true;
    };

    this.getActiveSlide = function()
    {
        if (this.activeSlide >= 0 && this.activeSlide < slidesArray.length)
			return this.slidesArray[this.activeSlide];
		return null;
    };
}

function Slide(url)
{
    this.url = url;
    this.isActive = false;
}

var slideFirst = new Slide("http://www.volgatech.net/upload/iblock/d53/d538dba0957ea7e101a44c3fcd6ce7e4.jpg");
var slideSecond = new Slide("http://www.volgatech.net/upload/iblock/728/728771406ab598852531787b6a7344b2.jpg");
var slider = new Slider([slideFirst, slideSecond]);

console.log(slider.getActiveSlide(), slider.activeSlide);
slider.prevSlide();
console.log(slider.getActiveSlide(), slider.activeSlide);
slider.nextSlide();
console.log(slider.getActiveSlide(), slider.activeSlide);
slider.nextSlide();
console.log(slider.getActiveSlide(), slider.activeSlide);