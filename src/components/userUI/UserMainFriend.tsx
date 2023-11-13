import Link from "next/link";
import Avatar from "../Avatar";
import { MessageSquare, MoreVertical } from "lucide-react";

const UserMainFriend = () => {
  return (
    <div className="flex-auto mt-6 mr-5 mb-2 ml-6">
      <div className="ml-2 uppercase text-xs font-bold text-light-600">
        online - 2
      </div>
      {/* TODO: fix this */}
      <ul className="mt-4 h-[70vh] overflow-x-hidden overflow-y-scroll">
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Arthas</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Dota 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">Discord Hater</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">OSU</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-2 user-main-friend rounded-lg">
          <Link
            href={"/"}
            className="flex justify-between items-center py-2 border-t-[1px] border-light-800"
          >
            <div className="flex items-center gap-3">
              <Avatar width={36} height={36} />
              <div>
                <div className="font-medium">kaarelen</div>
                <div className="text-xs text-light-400">
                  Playing <span className="font-medium">Buildiga 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MessageSquare size={16} fill="silver" color="silver" />
              </div>
              <div className="flex justify-center items-center w-8 h-8 rounded-full user-main-friend--button">
                <MoreVertical size={16} color="silver" />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMainFriend;
