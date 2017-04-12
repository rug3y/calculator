window.input = '';

$(function() {
  $('#ce').on('click', function(){
    window.input = window.input.slice(0, -1);
    $('input').val(window.input);
  });
});

$(function() {
  $('#ac').on('click', function(){
    window.input = '';
    $('input').val(window.input);
  });
});

$(function () {
    $('#seven').on('click', function () {
      window.input = window.input.concat('7'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#eight').on('click', function () {
      window.input = window.input.concat('8'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#nine').on('click', function () {
      window.input = window.input.concat('9'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#four').on('click', function () {
      window.input = window.input.concat('4'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#five').on('click', function () {
      window.input = window.input.concat('5'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#six').on('click', function () {
      window.input = window.input.concat('6'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#one').on('click', function () {
      window.input = window.input.concat('1'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#two').on('click', function () {
      window.input = window.input.concat('2'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#three').on('click', function () {
      window.input = window.input.concat('3'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#dec').on('click', function () {
      window.input = window.input.concat('.'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#zero').on('click', function () {
      window.input = window.input.concat('0'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#mod').on('click', function () {
      window.input = window.input.concat('%'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#div').on('click', function () {
      window.input = window.input.concat('/'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#mult').on('click', function () {
      window.input = window.input.concat('*'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#sub').on('click', function () {
      window.input = window.input.concat('-'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#add').on('click', function () {
      window.input = window.input.concat('+'); 
      $('input').val(window.input);
    });
});

$(function () {
    $('#equal').on('click', function () {
      window.input = eval(window.input); 
      $('input').val(window.input);
    });
});

$(function() {
  $('#ans').on('click', function() {
    window.input = $('input').val();
  });
});