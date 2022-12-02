import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import useProfile from "../hooks/useProfile";
import { LogoutUser } from '../libs/firebase.utils';
import Loading from './ui-blocks/Loading';

const UserInfo = (props) => { 
  const {
    profileHandle,
    showImage = true, showHandle = true, showName = true, showTweetCount = false,
    showLogout = false,
    imageClassNames,
    metaInfoStyles ,
    rootStyles,
    handleStyles,
    nameStyles,
    logoutButtonStyles,
  } = props;
  const [status, user] = useProfile(profileHandle);
  if (status === 'loading' || user===null) {
    return <Loading className={'text-sky-200 w-5 h-5 border-2 m-2'}/>
  }
  const initial = user?.name.split(' ').map((n) => n[0]).join('')
  const fallabckImage = `https://via.placeholder.com/80/OEA5E9/FFFFFF?text=${initial.toUpperCase()}`;
  return (
    <>
      <div className={classNames('relative flex-row inline-flex group', rootStyles)}>
        {showImage && (
          <img width={40} height={40}
            className={
              classNames(
                'rounded-full', 'inline-block ',
                { "mr-2": showHandle || showName || showTweetCount },
                imageClassNames
              )
            }
            src={user.photoURL || fallabckImage}
            alt={user?.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallabckImage
            }}
          />
        )}
        <div className={classNames(
          {
            'hidden lg:inline-block': showLogout,
            'inline-block': !showLogout
          },
          metaInfoStyles
        )}>
          {showName && <div className={classNames('md:leading-3 text-sm md:text-base', nameStyles)}>{user?.name}</div>}
          {showHandle && <div className={classNames('text-sm text-slate-500',handleStyles)}>@{user?.email.replace(/@.+/g, '')}</div>}
          {showTweetCount && <div className='text-xxs leading-3 sm:text-sm text-slate-500 sm:pt-2'>{user?.tweets?.length} Tweets</div>}
        </div>
      </div>

      {showLogout && (
        <button className={classNames(
          'text-slate-500 lg:text-white hover:bg-slate-100 p-2 lg:bg-slate-400 lg:mt-2 lg:p-4 rounded-full lg:hover:bg-sky-600 text-xxs lg:text-sm w-full',
          logoutButtonStyles
        )} onClick={LogoutUser}>
          <ArrowLeftOnRectangleIcon className={classNames(
              {
                'hidden': !showLogout,
                'w-4 h-4 group-hover:visible text-slate-white inline-block ': showLogout
              }
            )}
          />
          <span> Logout</span>
        </button>
      )}
    </>
  )
}

export default UserInfo;