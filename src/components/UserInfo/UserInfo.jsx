import './UserInfo.scss'

export const UserInfo = ({post}) => 
<>
            <a className="UserInfo" href="mailto:Sincere@april.biz">
              {post.userId.name}
            </a>
</>;
