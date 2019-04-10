 var image =  document.getElementById("imageOne");

            function changeColor()
            {
                if (image.getAttribute('src') == "day.jpg")
                {
                    image.src = "night.jpg";
                }
                else
                {
                    image.src = "day.jpg";
                }
            }