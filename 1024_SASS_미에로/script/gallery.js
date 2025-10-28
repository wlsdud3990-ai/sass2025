//gallery.js

$(document).ready(function(){

	//1. 변수선언
	let g_img = $('.g_list li a');//갤러리 이미지 
 const g_nav = $('.g_nav ul li a');  // <-- 여기 선언 추가



	//2. 갤러리 이미지 목록에서 이미지를 클릭
	g_img.click(function(e){
		e.preventDefault();//내용 시작지점에 작성(이벤트 무력화)

		let src = $(this).attr('href');
		let title = $(this).attr('title'); // 이미지의 제목 (ex. 디자인, 기획 등)
		console.log("클릭한 이미지", src); //확인하기


		//모달윈도 띄우기 
		let modal=`
		<div class="modal">
				<div class="m_inner">
						<h4>${title}</h4>
						<img src="${src}" alt="${title}">
			<i class="fas fa-times c_btn" title="닫기"></i>
			</div>
		</div>
		`;

    // body 마지막에 모달 추가
    $('body').append(modal);

    // 페이드인 효과로 모달 표시
    $('.modal').fadeIn();

			 // 닫기 버튼 클릭 시 모달 제거
    $('.modal, .modal .c_btn').click(function(){
      $('.modal').fadeOut(300, function(){
        $(this).remove(); // DOM에서 완전히 제거
      });
    });
  });


//3. 카테코리 메뉴 클릭 시 해당 메뉴에만 서식 적용하기

g_nav.click(function(e){
		e.preventDefault();

		//기존 서식을 제거하고 
		$('.g_nav li a').removeClass('act');


		//내가 선택한 메뉴에만 서식을 적용한다. 순서가 바뀌면 변경 안 됨.
		$(this).addClass('act');

		if($(this).parent().index()==0){
			//전체 목록이 나오게 
			// alert('전체메뉴 클릭');
			$('.g_list li').hide();
			$('.g_list li').fadeIn();

		}else if($(this).parent().index()==1){
			//기획 목록이 나오게
			// alert('기획메뉴 클릭');
			$('.g_list li').hide();//전체 목록 숨기기
			$('.plan').fadeIn();

		}else if($(this).parent().index()==2){
			//설계 목록이 나오게
			// alert('설계메뉴 클릭');
			$('.g_list li').hide();//전체 목록 숨기기
			$('.design').fadeIn();

		}else if($(this).parent().index()==3){
			//디자인 목록이 나오게
			// alert('디자인메뉴 클릭');
			$('.g_list li').hide();//전체 목록 숨기기
			$('.ui').fadeIn();

		}else{
			//개발 목록이 나오게 
			// alert('개발메뉴 클릭');
			$('.g_list li').hide();//전체 목록 숨기기
			$('.coding').fadeIn();


		}	

		});
}); 

