/* eslint-disable @next/next/no-img-element */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface headerProps {
  createdAt: string;
  author: {
    login: string;
    avatarUrl: string;
    url: string;
  };
}

const PostHeader: React.FC<headerProps> = (props) => {
  const {createdAt, author} = props;
  const createdDate: Date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return (
    <div className="flex">
      <img
        className="rounded-[50%] max-w-[50px] max-h-[50px] mb-4 mr-4"
        src={author.avatarUrl}
        alt="author pfp"
      />
      <div className="flex flex-col">
        <div className="flex items-center">
          <p className="font-semibold text-[1rem] mr-1"> {author.login} </p>
          <FontAwesomeIcon color="#5271e9" icon={faCircleCheck as IconProp} />
        </div>
        <div className="flex flex-wrap">
          <li className="list-none font-normal text-[0.85rem]">
            {createdDate.toLocaleDateString('vi-VN', options)}
          </li>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
