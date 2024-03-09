import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  const pathProps = {
    initial: "hidden",
    animate: "visible",
    transition: {
      default: { duration: 1, ease: "easeInOut" },
      fill: { duration: 1, ease: [1, 0, 0.8, 1] },
      delay: 0.5,
    },
  };

  return (
    <Link href="/">
      <motion.svg
        width="200"
        height="38"
        viewBox="0 0 200 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-animation scale-75 origin-left"
      >
        <motion.path
          {...pathProps}
          d="M190.726 27.3902L194.84 12.4413H200L193.743 30.9903H190.623L190.726 27.3902ZM187.897 12.4413L192.028 27.4073L192.114 30.9903H188.977L182.72 12.4413H187.897Z"
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              stroke: "white",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "#8B5CF6",
              stroke: "#8B5CF6",
              opacity: 1,
            },
          }}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 1,
          }}
        />
        <motion.path
          {...pathProps}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 1,
          }}
          d="M174.234 31.3331C172.794 31.3331 171.502 31.1045 170.359 30.6474C169.217 30.1788 168.245 29.5331 167.445 28.7102C166.657 27.8873 166.051 26.933 165.628 25.8473C165.205 24.7501 164.994 23.5844 164.994 22.3501V21.6644C164.994 20.2586 165.194 18.9729 165.594 17.8072C165.994 16.6414 166.565 15.63 167.308 14.7728C168.062 13.9157 168.977 13.2585 170.051 12.8014C171.125 12.3328 172.337 12.0985 173.685 12.0985C175 12.0985 176.165 12.3156 177.182 12.7499C178.2 13.1842 179.051 13.8014 179.737 14.6014C180.434 15.4014 180.96 16.3614 181.314 17.4814C181.668 18.59 181.845 19.8243 181.845 21.1844V23.2415H167.102V19.9501H176.994V19.5729C176.994 18.8872 176.868 18.2757 176.617 17.7386C176.377 17.19 176.011 16.7557 175.52 16.4357C175.028 16.1157 174.4 15.9557 173.634 15.9557C172.982 15.9557 172.422 16.0986 171.954 16.3843C171.485 16.67 171.102 17.07 170.805 17.5843C170.519 18.0986 170.302 18.7043 170.154 19.4015C170.017 20.0872 169.948 20.8415 169.948 21.6644V22.3501C169.948 23.093 170.051 23.7787 170.257 24.4073C170.474 25.0359 170.777 25.5787 171.165 26.0359C171.565 26.493 172.045 26.8473 172.605 27.0988C173.177 27.3502 173.822 27.4759 174.542 27.4759C175.434 27.4759 176.262 27.3045 177.028 26.9616C177.805 26.6073 178.474 26.0759 179.034 25.3673L181.434 27.9731C181.045 28.5331 180.514 29.0702 179.84 29.5845C179.177 30.0988 178.377 30.5217 177.44 30.8531C176.502 31.1731 175.434 31.3331 174.234 31.3331Z"
          fill="#8B5CF6"
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              stroke: "white",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "#8B5CF6",
              stroke: "#8B5CF6",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 1,
          }}
          d="M156.868 26.9445V4.65835H161.839V30.9903H157.365L156.868 26.9445ZM145.142 21.9387V21.5787C145.142 20.1615 145.302 18.8757 145.622 17.7214C145.942 16.5557 146.41 15.5557 147.028 14.7214C147.645 13.8871 148.405 13.2414 149.308 12.7842C150.211 12.3271 151.239 12.0985 152.393 12.0985C153.479 12.0985 154.428 12.3271 155.239 12.7842C156.062 13.2414 156.759 13.8928 157.331 14.7385C157.914 15.5728 158.382 16.5614 158.736 17.7043C159.091 18.8357 159.348 20.0758 159.508 21.4244V22.213C159.348 23.5044 159.091 24.7044 158.736 25.813C158.382 26.9216 157.914 27.8931 157.331 28.7274C156.759 29.5502 156.062 30.1902 155.239 30.6474C154.416 31.1045 153.456 31.3331 152.359 31.3331C151.205 31.3331 150.176 31.0988 149.273 30.6303C148.382 30.1617 147.628 29.5045 147.01 28.6588C146.405 27.8131 145.942 26.8188 145.622 25.6759C145.302 24.533 145.142 23.2873 145.142 21.9387ZM150.079 21.5787V21.9387C150.079 22.7044 150.136 23.4187 150.251 24.0816C150.376 24.7444 150.576 25.333 150.851 25.8473C151.136 26.3502 151.502 26.7445 151.948 27.0302C152.405 27.3045 152.959 27.4416 153.611 27.4416C154.456 27.4416 155.153 27.253 155.702 26.8759C156.251 26.4873 156.668 25.9559 156.953 25.2816C157.251 24.6073 157.422 23.8301 157.468 22.9501V20.7044C157.434 19.9843 157.331 19.3386 157.159 18.7672C156.999 18.1843 156.759 17.6872 156.439 17.2757C156.131 16.8643 155.742 16.5443 155.273 16.3157C154.816 16.0871 154.273 15.9728 153.645 15.9728C153.005 15.9728 152.456 16.1214 151.999 16.4186C151.542 16.7043 151.171 17.0986 150.885 17.6014C150.611 18.1043 150.405 18.6986 150.268 19.3843C150.142 20.0586 150.079 20.7901 150.079 21.5787Z"
          fill="#8B5CF6"
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              stroke: "white",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "#8B5CF6",
              stroke: "#8B5CF6",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M137.907 25.8644C137.907 25.5102 137.805 25.1902 137.599 24.9044C137.393 24.6187 137.01 24.3559 136.45 24.1158C135.902 23.8644 135.107 23.6358 134.067 23.4301C133.13 23.2244 132.256 22.9673 131.444 22.6587C130.644 22.3387 129.947 21.9558 129.353 21.5101C128.77 21.0644 128.313 20.5386 127.982 19.9329C127.65 19.3158 127.484 18.6129 127.484 17.8243C127.484 17.0471 127.65 16.3157 127.982 15.63C128.324 14.9442 128.81 14.3385 129.439 13.8128C130.079 13.2756 130.856 12.8585 131.77 12.5613C132.696 12.2528 133.736 12.0985 134.89 12.0985C136.502 12.0985 137.885 12.3556 139.039 12.8699C140.205 13.3842 141.096 14.0928 141.713 14.9957C142.342 15.8871 142.656 16.9043 142.656 18.0472H137.719C137.719 17.5672 137.616 17.1386 137.41 16.7614C137.216 16.3728 136.907 16.07 136.485 15.8528C136.073 15.6243 135.536 15.51 134.873 15.51C134.325 15.51 133.85 15.6071 133.45 15.8014C133.05 15.9843 132.742 16.2357 132.524 16.5557C132.319 16.8643 132.216 17.2071 132.216 17.5843C132.216 17.87 132.273 18.1272 132.387 18.3557C132.513 18.5729 132.713 18.7729 132.987 18.9558C133.262 19.1386 133.616 19.31 134.05 19.47C134.496 19.6186 135.045 19.7558 135.696 19.8815C137.033 20.1558 138.227 20.5158 139.279 20.9615C140.33 21.3958 141.165 21.9901 141.782 22.7444C142.399 23.4873 142.708 24.4644 142.708 25.6759C142.708 26.4987 142.525 27.253 142.159 27.9388C141.793 28.6245 141.267 29.2245 140.582 29.7388C139.896 30.2417 139.073 30.636 138.113 30.9217C137.165 31.196 136.096 31.3331 134.907 31.3331C133.182 31.3331 131.719 31.0245 130.519 30.4074C129.33 29.7902 128.427 29.0074 127.81 28.0588C127.204 27.0988 126.902 26.1159 126.902 25.1101H131.582C131.604 25.7844 131.776 26.3273 132.096 26.7388C132.427 27.1502 132.844 27.4473 133.347 27.6302C133.862 27.8131 134.416 27.9045 135.01 27.9045C135.65 27.9045 136.182 27.8188 136.605 27.6473C137.027 27.4645 137.347 27.2245 137.565 26.9273C137.793 26.6187 137.907 26.2645 137.907 25.8644Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M117.456 31.3331C116.016 31.3331 114.724 31.1045 113.581 30.6474C112.438 30.1788 111.467 29.5331 110.667 28.7102C109.878 27.8873 109.273 26.933 108.85 25.8473C108.427 24.7501 108.215 23.5844 108.215 22.3501V21.6644C108.215 20.2586 108.415 18.9729 108.815 17.8072C109.215 16.6414 109.787 15.63 110.53 14.7728C111.284 13.9157 112.198 13.2585 113.273 12.8014C114.347 12.3328 115.558 12.0985 116.907 12.0985C118.221 12.0985 119.387 12.3156 120.404 12.7499C121.421 13.1842 122.273 13.8014 122.959 14.6014C123.656 15.4014 124.181 16.3614 124.536 17.4814C124.89 18.59 125.067 19.8243 125.067 21.1844V23.2415H110.324V19.9501H120.216V19.5729C120.216 18.8872 120.09 18.2757 119.839 17.7386C119.599 17.19 119.233 16.7557 118.741 16.4357C118.25 16.1157 117.621 15.9557 116.856 15.9557C116.204 15.9557 115.644 16.0986 115.176 16.3843C114.707 16.67 114.324 17.07 114.027 17.5843C113.741 18.0986 113.524 18.7043 113.376 19.4015C113.238 20.0872 113.17 20.8415 113.17 21.6644V22.3501C113.17 23.093 113.273 23.7787 113.478 24.4073C113.696 25.0359 113.998 25.5787 114.387 26.0359C114.787 26.493 115.267 26.8473 115.827 27.0988C116.398 27.3502 117.044 27.4759 117.764 27.4759C118.656 27.4759 119.484 27.3045 120.25 26.9616C121.027 26.6073 121.696 26.0759 122.256 25.3673L124.656 27.9731C124.267 28.5331 123.736 29.0702 123.061 29.5845C122.399 30.0988 121.599 30.5217 120.661 30.8531C119.724 31.1731 118.656 31.3331 117.456 31.3331Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M83.4436 16.2814V30.9903H78.4892V12.4413H83.135L83.4436 16.2814ZM82.7578 21.0644H81.3864C81.3864 19.7729 81.5407 18.5843 81.8493 17.4986C82.1693 16.4014 82.6321 15.4528 83.2379 14.6528C83.855 13.8414 84.615 13.2128 85.5179 12.7671C86.4208 12.3213 87.4665 12.0985 88.6551 12.0985C89.478 12.0985 90.2323 12.2242 90.918 12.4756C91.6037 12.7156 92.1923 13.0985 92.6837 13.6242C93.1866 14.1385 93.5752 14.8128 93.8495 15.6471C94.1238 16.47 94.2609 17.4586 94.2609 18.6129V30.9903H89.3237V19.1615C89.3237 18.3157 89.2094 17.6643 88.9808 17.2071C88.7522 16.75 88.4265 16.43 88.0037 16.2471C87.5922 16.0643 87.0951 15.9728 86.5122 15.9728C85.8722 15.9728 85.3122 16.1043 84.8322 16.3671C84.3636 16.63 83.975 16.9957 83.6664 17.4643C83.3579 17.9214 83.1293 18.4586 82.9807 19.0758C82.8321 19.6929 82.7578 20.3558 82.7578 21.0644ZM93.7981 20.4986L92.0323 20.7215C92.0323 19.51 92.1809 18.3843 92.478 17.3443C92.7866 16.3043 93.238 15.39 93.8323 14.6014C94.4381 13.8128 95.1866 13.2014 96.0781 12.7671C96.9695 12.3213 97.9981 12.0985 99.1639 12.0985C100.055 12.0985 100.867 12.2299 101.598 12.4928C102.33 12.7442 102.953 13.1499 103.467 13.7099C103.993 14.2585 104.393 14.9785 104.667 15.87C104.953 16.7614 105.095 17.8529 105.095 19.1443V30.9903H100.141V19.1443C100.141 18.2872 100.027 17.6357 99.7982 17.19C99.581 16.7329 99.261 16.4186 98.8381 16.2471C98.4267 16.0643 97.9353 15.9728 97.3638 15.9728C96.7695 15.9728 96.2495 16.0928 95.8038 16.3328C95.3581 16.5614 94.9866 16.8814 94.6895 17.2929C94.3923 17.7043 94.1695 18.1843 94.0209 18.7329C93.8723 19.27 93.7981 19.8586 93.7981 20.4986Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M69.729 26.8073V18.5443C69.729 17.95 69.6319 17.4414 69.4376 17.0186C69.2433 16.5843 68.9405 16.2471 68.529 16.0071C68.129 15.7671 67.609 15.6471 66.969 15.6471C66.4204 15.6471 65.9461 15.7443 65.5461 15.9386C65.1461 16.1214 64.8375 16.39 64.6204 16.7443C64.4032 17.0871 64.2947 17.4929 64.2947 17.9614H59.3574C59.3574 17.1729 59.5403 16.4243 59.906 15.7157C60.2717 15.0071 60.8032 14.3842 61.5003 13.8471C62.1975 13.2985 63.0261 12.8699 63.9861 12.5613C64.9575 12.2528 66.0433 12.0985 67.2433 12.0985C68.6833 12.0985 69.9633 12.3385 71.0833 12.8185C72.2034 13.2985 73.0834 14.0185 73.7234 14.9785C74.3748 15.9386 74.7006 17.1386 74.7006 18.5786V26.5159C74.7006 27.5331 74.7634 28.3674 74.8891 29.0188C75.0148 29.6588 75.1977 30.2188 75.4377 30.6988V30.9903H70.4491C70.209 30.4874 70.0262 29.8588 69.9005 29.1045C69.7862 28.3388 69.729 27.5731 69.729 26.8073ZM70.3805 19.6929L70.4148 22.4872H67.6547C67.0033 22.4872 66.4375 22.5615 65.9575 22.7101C65.4775 22.8587 65.0832 23.0701 64.7747 23.3444C64.4661 23.6073 64.2375 23.9158 64.0889 24.2701C63.9518 24.6244 63.8832 25.013 63.8832 25.4359C63.8832 25.8587 63.9804 26.2416 64.1746 26.5845C64.3689 26.9159 64.6489 27.1788 65.0147 27.373C65.3804 27.5559 65.809 27.6473 66.3004 27.6473C67.0433 27.6473 67.689 27.4988 68.2376 27.2016C68.7862 26.9045 69.209 26.5387 69.5062 26.1045C69.8148 25.6702 69.9748 25.2587 69.9862 24.8701L71.2891 26.9616C71.1062 27.4302 70.8548 27.9159 70.5348 28.4188C70.2262 28.9216 69.8319 29.3959 69.3519 29.8417C68.8719 30.276 68.2947 30.636 67.6204 30.9217C66.9461 31.196 66.1461 31.3331 65.2204 31.3331C64.0432 31.3331 62.9746 31.0988 62.0146 30.6303C61.066 30.1502 60.3117 29.4931 59.7517 28.6588C59.2031 27.8131 58.9288 26.853 58.9288 25.7787C58.9288 24.8073 59.1117 23.9444 59.4774 23.1901C59.8431 22.4358 60.3803 21.8015 61.0889 21.2872C61.8089 20.7615 62.7061 20.3672 63.7804 20.1043C64.8547 19.8301 66.1004 19.6929 67.5176 19.6929H70.3805Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M50.8373 12.4413H55.7916V32.1046C55.7916 33.476 55.5402 34.636 55.0373 35.5846C54.5345 36.5332 53.8087 37.2532 52.8602 37.7447C51.9116 38.2361 50.763 38.4818 49.4144 38.4818C48.9915 38.4818 48.5801 38.459 48.1801 38.4133C47.7686 38.3675 47.3458 38.2932 46.9115 38.1904L46.9286 34.4017C47.2029 34.4475 47.4715 34.4818 47.7343 34.5046C47.9858 34.5389 48.2429 34.556 48.5058 34.556C49.0201 34.556 49.4487 34.4703 49.7915 34.2989C50.1344 34.1275 50.3915 33.8589 50.563 33.4932C50.7458 33.1389 50.8373 32.676 50.8373 32.1046V12.4413ZM50.443 7.60697C50.443 6.88696 50.6944 6.29266 51.1973 5.82408C51.7116 5.3555 52.3859 5.12121 53.2202 5.12121C54.0659 5.12121 54.7402 5.3555 55.2431 5.82408C55.7459 6.29266 55.9974 6.88696 55.9974 7.60697C55.9974 8.32698 55.7459 8.92128 55.2431 9.38986C54.7402 9.85844 54.0659 10.0927 53.2202 10.0927C52.3859 10.0927 51.7116 9.85844 51.1973 9.38986C50.6944 8.92128 50.443 8.32698 50.443 7.60697Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M0 7.25721C0 3.24916 3.24916 0 7.25721 0H30.598C34.606 0 37.8552 3.24916 37.8552 7.25721V30.598C37.8552 34.606 34.606 37.8552 30.598 37.8552H7.25721C3.24916 37.8552 0 34.606 0 30.598V7.25721Z"
          fill="#8B5CF6"
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              stroke: "white",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "#8B5CF6",
              stroke: "#8B5CF6",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M31.1931 20.1259L23.8264 17.4941V14.4026L33.8364 18.6089V20.8269L31.1931 20.1259ZM23.8264 22.3325L31.2046 19.6432L33.8364 19.0111V21.2177L23.8264 25.424V22.3325Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M22.866 10.3342L16.729 28.504H14.2696L20.4066 10.3342H22.866Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
        <motion.path
          {...pathProps}
          d="M6.37918 19.6662L13.6885 22.3095V25.424L3.75886 21.2177V19.0111L6.37918 19.6662ZM13.6885 17.5056L6.36768 20.1948L3.75886 20.8154V18.6089L13.6885 14.4026V17.5056Z"
          fill="white"
          style={{
            stroke: "white",
          }}
          variants={{
            hidden: {
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              opacity: 0,
            },
            visible: {
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              opacity: 1,
            },
          }}
        />
      </motion.svg>
    </Link>
  );
};

export default Logo;
