"use client"
import { Component } from "react";
import Image from 'next/image'
import {UserCircleIcon, EnvelopeIcon, PhoneIcon, ChatBubbleBottomCenterIcon} from "@heroicons/react/24/outline"
export default class CardOne extends Component {
  render() {
    const { name= "Jane Doe", userIconColor = "stroke-emerald-400", emailIconColor = "stroke-violet-900"} = this.props;

    return (
      <div className="-mt-2 p-2 mr-2 lg:mt-0 gap-x-6 grid lg:grid-flow-col grid-flow-row auto-cols-max justify-center gap-4">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 gap-x-6">
          <div className={`max-w-xs`}>
            <div className="flex flex-row justify-center">
            <UserCircleIcon className={`w-[80px] h-[80px] ${userIconColor}`}/>
            </div>
            <p className="mt-6 flex items-baseline justify-center gap-x-2 px-[5rem]">
              <span className="text-5xl font-bold tracking-tight text-gray-900">{name}</span>
            </p>
            <div className="flex flex-row justify-center gap-4 py-[1rem]">
              <EnvelopeIcon className={`w-[40px] h-[40px] ${emailIconColor}`}/>
              <PhoneIcon className="w-[40px] h-[40px]"/>
              <ChatBubbleBottomCenterIcon className="w-[40px] h-[40px]"/>
            </div>
            
          </div>
          
        </div>
      </div>
    );
  }
}
