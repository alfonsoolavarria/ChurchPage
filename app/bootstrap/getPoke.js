$(document).ready(function() {

  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    type: 'GET',
    data: {},
    success: function(result) {
      console.log(result);
      var a = result.sprites.back_default
      $('.otro').append(`
        <div class='col-md-3'>
          <div class='card' style='width: 18rem;'>
              <!-- Card -->
              <div class='card testimonial-card '>
                <!-- Background color -->
                <div class='card-up indigo lighten-1'></div>
                <!-- Avatar -->
                <div class='avatar mx-auto white'>
                  <img src=${a} class='rounded-circle'
                    alt=''>
                </div>
                <!-- Content -->
                <div class='card-body'>
                  <!-- Name -->
                  <h4 class='card-title'>`+result.forms[0].name+`</h4>
                  <hr>
                  <!-- Quotation -->
                  <p><i class='fas fa-quote-left'></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
                  </p>
                </div>
            </div>
            <!-- Card -->
          </div>
        </div>
        `);
    }
  });

});
