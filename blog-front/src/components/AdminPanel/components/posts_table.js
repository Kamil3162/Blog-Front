import {DashBoardInfoFont} from "../styles/admin_panel";
import {LeftPanelElementText} from "../styles/left_panel";
import table from "../../../assets/admin_icons/table.png";
import {
    InfoBlogsContainer,
    InfoBlogTableth,
    InfoBlogTd,
    OwnderInfoPhotoBlog,
    OwnderInforBlogTd
} from "../styles/info_blogs";
import {FaStar} from "react-icons/fa";


const PostsTable = () => {
    return (
        <>
            <InfoBlogsContainer>
                <DashBoardInfoFont>
                    Posts
                </DashBoardInfoFont>
                <LeftPanelElementText>
                    ✔️ 30 done this month
                </LeftPanelElementText>
                <table>
                    <tr>
                        <InfoBlogTableth>
                            TITLE
                        </InfoBlogTableth>
                        <InfoBlogTableth>
                            CATEGORY
                        </InfoBlogTableth>
                        <InfoBlogTableth>
                            ONWER
                        </InfoBlogTableth>
                        <InfoBlogTableth>
                            VIEWS
                        </InfoBlogTableth>
                        <InfoBlogTableth>
                            RATING
                        </InfoBlogTableth>
                    </tr>
                    <tr>
                        <InfoBlogTd>Alfreds Futterkiste</InfoBlogTd>
                        <InfoBlogTd>Maria Anders</InfoBlogTd>
                        <InfoBlogTd>
                            <OwnderInforBlogTd>
                                <OwnderInfoPhotoBlog>
                                    <img src={table} alt="Table icon" />
                                </OwnderInfoPhotoBlog>
                                <p>Admin</p>
                            </OwnderInforBlogTd>
                        </InfoBlogTd>
                        <InfoBlogTd>321321321</InfoBlogTd>
                        <InfoBlogTd>
                            <FaStar className="icon start" style={{ color: 'yellow' }}/>
                            <FaStar className="icon start"/>
                            <FaStar className="icon start"/>
                            <FaStar className="icon start"/>
                            <FaStar className="icon start"/>
                        </InfoBlogTd>
                    </tr>
                </table>
            </InfoBlogsContainer>
        </>
    )
}

export default PostsTable;