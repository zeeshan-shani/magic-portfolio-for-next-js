"use client";

import React, { useState } from "react";
import { Column, Flex, Heading, RevealFx, Text } from "@/once-ui/components";

const steps = [
  {
    title: "Discovery",
    desc: "We start by learning your goals, users, and vision to ensure alignment.",
    tooltip: "Understanding your core needs and business context.",
  },
  {
    title: "Research",
    desc: "We analyze the market, your competitors, and gather key insights.",
    tooltip: "Deep dive into market and competitor analysis.",
  },
  {
    title: "UI/UX Design",
    desc: "We craft clean, user-friendly, and accessible interfaces.",
    tooltip: "Designing intuitive and inclusive experiences.",
  },
  {
    title: "Development",
    desc: "We build robust, scalable apps using modern tech stacks.",
    tooltip: "Implementing scalable and maintainable codebases.",
  },
  {
    title: "QA & Feedback",
    desc: "We test rigorously, fix bugs, and polish based on your feedback.",
    tooltip: "Ensuring quality and continuous improvement.",
  },
  {
    title: "Launch & Iterate",
    desc: "We go live, monitor, and improve through data and iteration.",
    tooltip: "Deploying and optimizing based on real user data.",
  },
];

const HowWeWork: React.FC = () => {
  // For tooltip visibility
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(null);

  return (
    <RevealFx translateY="16" delay={0.5} fillWidth>
      <section
        aria-labelledby="how-we-work-heading"
        style={{ paddingTop: "5px" }}
      >
        <Column
          gap="l"
           horizontal="start"
          style={{ margin: "0 auto" }}
        >
          <Heading
            id="how-we-work-heading"
            variant="display-strong-m"
            align="start"
            tabIndex={-1} // focusable for skip links
          >
            Our Creative Process
          </Heading>

          <Text
            variant="heading-default-m"
            align="start"
            onBackground="neutral-weak"
            style={{ maxWidth: "640px" }}
          >
            A transparent journey from concept to launch, ensuring clarity,
            quality, and collaboration at every step.
          </Text>

          <Flex
            wrap="wrap"
            gap="32"
            justify="center"
            paddingTop="48"
            as="ol"
            aria-label="Creative process steps"
            style={{
              position: "relative",
              listStyle: "none",
              paddingLeft: 0,
              transition: "background-color 0.3s ease",
              opacity: 0,
              animation: `fadeUp 0.6s ease forwards`,
              animationDelay: `${0.12}s`,
            }}
          >
            {steps.map((step, idx) => (
              <li
                key={idx}
                tabIndex={0}
                role="group"
                aria-labelledby={`step-title-${idx}`}
                aria-describedby={`step-desc-${idx}`}
                onFocus={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0,0,0,0.08)";
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0,0,0,0.08)";
                }}
                style={{
                  background: "var(--color-surface-strong)",
                  borderRadius: 16,
                  width: 280,
                  padding: 20,
                  gap: 12,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.08)",

                  // Staggered fade up animation
                  opacity: 0,
                  animation: `fadeUp 0.6s ease forwards`,
                  animationDelay: `${idx * 0.12}s`,
                }}
              >
                {/* Step Number Badge */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-brand)",
                    // color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    userSelect: "none",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={() => setTooltipVisible(idx)}
                  onMouseLeave={() => setTooltipVisible(null)}
                  onFocus={() => setTooltipVisible(idx)}
                  onBlur={() => setTooltipVisible(null)}
                  tabIndex={-1}
                >
                  {idx + 1}
                </div>

                {/* Tooltip */}
                {tooltipVisible === idx && (
                  <div
                    role="tooltip"
                    style={{
                      position: "absolute",
                      top: -55,
                      left: 42,
                      backgroundColor: "var(--color-surface-strong)",
                      color: "var(--color-neutral-strong)",
                      padding: "6px 12px",
                      borderRadius: 8,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                      fontSize: 12,
                      maxWidth: 220,
                      zIndex: 1000,
                      lineHeight: 1.5,
                    }}
                  >
                    {step.tooltip}
                  </div>
                )}

                <Heading
                  id={`step-title-${idx}`}
                  variant="heading-strong-xs"
                  style={{
                    marginLeft: 48,
                  }}
                >
                  {step.title}
                </Heading>

                <Text
                  id={`step-desc-${idx}`}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  style={{ marginLeft: 48 }}
                >
                  {step.desc}
                </Text>

                {/* Arrow */}
                {idx !== steps.length - 1 && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable={false}
                    style={{
                      position: "absolute",
                      right: -32,
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "default",
                      transition: "transform 0.3s ease",
                    }}
                    className="step-arrow"
                  >
                    <path
                      d="M2 12H22M22 12L16 6M22 12L16 18"
                      stroke="var(--color-brand)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            ))}
          </Flex>

          <Text
            paddingTop="40"
            variant="label-default-m"
            align="center"
            onBackground="brand-strong"
          >
            ✨ This is the collaborative journey we’ll take to bring your ideas
            to life.
          </Text>
        </Column>

        {/* Animations */}
        <style>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Arrow bounce on hover */
          li:focus .step-arrow,
          li:hover .step-arrow {
            animation: bounceArrow 0.6s ease infinite alternate;
          }

          @keyframes bounceArrow {
            from {
              transform: translateY(-50%) translateX(0);
            }
            to {
              transform: translateY(-50%) translateX(6px);
            }
          }

          /* Focus outline for accessibility */
          li:focus {
            outline: 3px solid var(--color-brand);
            outline-offset: 4px;
          }

          /* Dark mode basics - define your own variables elsewhere */
          @media (prefers-color-scheme: dark) {
            :root {
              --color-surface-strong: #1a1a1a;
              --color-brand: #3ea6ff;
              --color-neutral-strong: #eee;
            }
          }

          /* Responsive tweaks */
          @media (max-width: 720px) {
            ol {
              flex-direction: column;
              align-items: center;
            }
            li {
              width: 90% !important;
              margin-bottom: 32px;
            }
            li .step-arrow {
              position: static !important;
              margin-top: 8px;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </RevealFx>
  );
};

export default HowWeWork;
