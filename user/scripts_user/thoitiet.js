var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content'); // Để sử dụng cho việc ẩn nội dung khi có lỗi
var body = document.querySelector('body');


async function changeWeatherUI(capitalSearch){
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=dec8601cd2fe00c6d98fa9f6abae019f`;

    
        let data = await fetch(apiURL).then(res => res.json());
        if (data.cod == 200) {
            content.classList.remove('hide'); // Hiển thị nội dung nếu dữ liệu hợp lệ
            if(data.name == 'Turan'){
                city.innerText = 'Da Nang';
            } else{
                city.innerText = data.name;
            console.log(data.name);
            }
            

            
            country.innerText = data.sys.country;
            visibility.innerText = data.visibility + ' m';
            wind.innerText = data.wind.speed + ' m/s';
            sun.innerText = data.main.humidity + ' %';
            let temp = Math.round(data.main.temp - 273.15)+ ' °C';
            value.innerText = temp
            shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
            time.innerText = new Date().toLocaleString('vi');

            
            body.setAttribute('class','warm')
            if(temp<=25){
            body.setAttribute('class','cool')
            }
            if(temp<22){
                body.setAttribute('class','warm')
            }
            if(temp<19){
                body.setAttribute('class','cold')
                }
                
        } else {
            content.classList.add('hide');
        }
    
}

search.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        let capitalSearch=search.value.trim()
        changeWeatherUI(capitalSearch);
    }
});
changeWeatherUI('ho chi minh')
