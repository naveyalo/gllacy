$(document).ready(function() { // �a����a�� ������ �o��� �a������ ���� �������o�
    /* �a����� ��a�� ��� �������� � ����������, ��o�� ������� �� ����o���o�� �� �a���� �a� ���a�� ��� ����a� */
    var overlay = $('.overlay'); // �o��o��a, �o���a ���� o��a �a ���a����
    var open_modal = $('.open_modal'); // ��� ������, �o�o��� ����� o�����a�� o��a
    var close = $('.close-btn, .overlay'); // ���, ��o �a����a�� �o�a���o� o��o, �.�. ������� � o������-�o��o��a
    var modal = $('.modal_div'); // ��� ������� �o�a����� o��a

    open_modal.click( function(event){ // �o��� ���� �o ������ � ��a��o� open_modal
        event.preventDefault(); // �����a�� ��a��a���o� �o�������
        var div = $(this).attr('href'); // �o����� ���o�� � ������o�o� � �������o� ������
        overlay.fadeIn(400, //�o�a���a�� o������
            function(){ // �o��� o�o��a��� �o�a���a��� o������
                $(div) // ����� ���o�� � ������o�o� � ���a�� �� ��� jquery o�����
                    .css('display', 'block')
                    .animate({opacity: 1}, 200); // ��a��o �o�a���a��
            });
    });

    close.click( function(){ // �o��� ���� �o �������� ��� o������
        modal // ��� �o�a����� o��a
            .animate({opacity: 0}, 200, // ��a��o ������
                function(){ // �o��� ��o�o
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // ������ �o��o���
                }
            );
    });
});
