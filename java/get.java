import java.io.*;
// javax系はtomcatが必要なので今回は非ビルド
import javax.servlet.*;
import javax.servlet.http.*;

class GetParam extends HttpServlet {
    public void main(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException{
        // 文字コードの指定
        request.setCharacterEncoding("UTF-8");
        //クエリパラメータから情報を取得
        String name = request.getParameter("name");
        // そのまま表示
        System.out.println("formから受け取ったデータは"+name+"です");
    }
 
}