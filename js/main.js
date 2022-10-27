    // ---- At all pages ----
$('#mega_list').on('click', function(){
    $('#inner_list').fadeToggle();
})

$('.mobile_screen').on('click', function(){
    $('.links').fadeToggle();
})

    // ---- Invoice Page ----
    // ---- Algeria btn ----
$('#algeria_card').on('click', function(event){
    event.preventDefault();
    $('.countries_selections').fadeOut();
    $('.docs').fadeIn();
})
$('#back_docs').on('click', function(event){
    event.preventDefault();
    $('.docs').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_docs').on('click', function(event){
    event.preventDefault();
    $('.docs').fadeOut();
    $('.price').fadeIn();
})

    // ----- price btn -----
$('#back_price').on('click', function(event){
    event.preventDefault();
    $('.price').fadeOut();
    $('.countries_selections').fadeIn();
})
// $('#next_price').on('click', function(event){
//     event.preventDefault();
//     $('#content_invoice').css('height', '210vh')
//     $('.price').fadeOut();
// })

    // ----- bussiness document btn -----
$('#back_buss').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').fadeOut();
    $('.docs').fadeIn();
})
$('#next_buss').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').fadeOut();
    $('.price').fadeIn();
})

    // ----- result delete btn ------
$('#delete').on('click', function(){
    $('.result table tbody tr').fadeOut()
})
    // ----- yes or no btn -----
$('#yes').on('change', function(){
    $('#more_docs2').css('display', 'flex');
})
$('#no').on('change', function(){
    $('#more_docs2').css('display', 'none');
})
// $('#yes2').on('change', function(){
//     $('#content_invoice').css('height', '210vh')
//     $('#more_buss').fadeIn();
// })
// $('#no2').on('change', function(){
//     $('#content_invoice').css('height', '180vh')
//     $('#more_buss').fadeOut();
// })
// $('#back_res').on('click', function(){
//     $('#content_invoice').css('height', '180vh')
//     $('.result').fadeOut();
//     $('.price').fadeIn();
// })
    // ---- counter at Algira -----
$('.slct').on('click', function(){
    $('.counter').hide();
    $(this).siblings('.counter').show()
})
$('.sub').on('click', function(){
    var value = parseInt($(this).siblings('.num').val());
    value = value - 1;
    $(this).siblings('.num').val(value)
})
$('.add').on('click', function(){
    var value = parseInt($(this).siblings('.num').val());
    value = value + 1;
    $(this).siblings('.num').val(value)
})  


// ---- All Cards ----
$('.card').on('click', function(){
    $('.countries_selections').fadeOut();
    $('.buss_docs').fadeIn();
})
$('#back_buss_doc').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_buss_doc').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').fadeOut();
    $('.price').fadeIn();
})

// ---- Bahrain btn ----
$('.unique_card').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').hide();
    $('.countries_selections').fadeOut();
    $('.bahrain_case').fadeIn();
    $('.counter').show();
})
$('#back_buss_num').on('click', function(){
    $('.counter').hide();
    $('.bahrain_case').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_buss_num').on('click', function(){
    $('.bahrain_case').fadeOut();
    $('.inv_num').fadeIn();
})
$('#back_inv').on('click', function(){
    $('.inv_num').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_inv').on('click', function(){
    $('.inv_num').fadeOut();
    $('.price').fadeIn();
})

// ---- Iraq btn ----
$('#iraq_card').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').hide();
    $('.countries_selections').fadeOut();
    $('.iraq_pre_case').fadeIn();
    $('.counter').show();
})
$('#back_iraq_pre').on('click', function(){
    $('.iraq_pre_case').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_iraq_pre').on('click', function(){
    $('.iraq_pre_case').fadeOut();
    $('.iraq_case').fadeIn();
})
$('#back_iraq_inp').on('click', function(){
    $('.iraq_case').fadeOut();
    $('.iraq_pre_case').fadeIn();
})
$('#next_iraq_inp').on('click', function(){
    $('.iraq_case').fadeOut();
    $('.price').fadeIn();
})

// ---- Yemen btn ----
$('#yemen_card').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').hide();
    $('.countries_selections').fadeOut();
    $('.yemen_pre_case').fadeIn();
    $('.counter').show();
})
$('#back_yemen_pre').on('click', function(){
    $('.yemen_pre_case').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_yemen_pre').on('click', function(){
    $('.yemen_pre_case').fadeOut();
    $('.yemen_case').fadeIn();
})
$('#back_yemen_inp').on('click', function(){
    $('.yemen_case').fadeOut();
    $('.yemen_pre_case').fadeIn();
})
$('#next_yemen_inp').on('click', function(){
    $('.yemen_case').fadeOut();
    $('.price').fadeIn();
})

// ---- UAE btn ----
$('#UAE_card').on('click', function(event){
    event.preventDefault();
    $('.buss_docs').hide();
    $('.countries_selections').fadeOut();
    $('.UAE_pre_case').fadeIn();
    $('.counter').show();
})
$('#back_UAE_pre').on('click', function(){
    $('.UAE_pre_case').fadeOut();
    $('.countries_selections').fadeIn();
})
$('#next_UAE_pre').on('click', function(){
    $('.UAE_pre_case').fadeOut();
    $('.UAE_case').fadeIn();
})
$('#back_UAE_inp').on('click', function(){
    $('.UAE_case').fadeOut();
    $('.UAE_pre_case').fadeIn();
})
$('#next_UAE_inp').on('click', function(){
    $('.UAE_case').fadeOut();
    $('.price').fadeIn();
})

// ----- Business Documnets Page ------
// ---- Iraq btn -----
$('#iraq_bus').on('click', function(event){
    event.preventDefault();
    $('.countries_selections').fadeOut();
    $('#ym_buss_docs').hide();
    $('#rq_buss_docs').fadeIn();
    
    $('#back_buss_doc_irq').on('click', function(){
        $('#rq_buss_docs').fadeOut();
        $('.countries_selections').fadeIn();
    })
    $('#next_buss_doc_irq').on('click', function(){
        $('#rq_buss_docs').fadeOut();
        $('.iraq_bus_doc').fadeIn();
    })
    $('#back_iraq_doc').on('click', function(){
        $('.iraq_bus_doc').fadeOut();
        $('#rq_buss_docs').fadeIn();
    })
    $('#next_iraq_doc').on('click', function(){
        $('.iraq_bus_doc').fadeOut();
        $('.price').fadeIn();
    })
})

// ---- Yemen btn -----
$('#yemen_bus').on('click', function(event){
    event.preventDefault();
    $('.countries_selections').fadeOut();
    $('#rq_buss_docs').hide();
    $('#ym_buss_docs').fadeIn();
    
    $('#back_buss_doc_ymn').on('click', function(){
        $('#ym_buss_docs').fadeOut();
        $('.countries_selections').fadeIn();
    })
    $('#next_buss_doc_ymn').on('click', function(){
        $('#ym_buss_docs').fadeOut();
        $('.yemen_bus_doc').fadeIn();
    })
    $('#back_yemen_doc').on('click', function(){
        $('.yemen_bus_doc').fadeOut();
        $('#ym_buss_docs').fadeIn();
    })
    $('#next_yemen_doc').on('click', function(){
        $('.yemen_bus_doc').fadeOut();
        $('.price').fadeIn();
    })
})


// ----- Credit Card Page ------
$('#name_credit_card').keyup(function(){
    var x = $(this).val();
    $('#input_name').text(x);
})

$('#num_credit_card').keyup(function(){
    var y = $(this).val();
    $('#input_number').text(y);
})

$('#ex_date_month').change(function(){
    var selected_month = $(this).val()
    $('#input_month').text(selected_month)
})

$('#ex_date_year').change(function(){
    var selected2_year = $(this).val()
    $('#input_year').text(selected2_year)
})


// ----- Printing page --------
$('#print').click(function(){
    window.print();
});