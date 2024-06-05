import { SlackCommandMiddlewareArgs } from '@slack/bolt';

/**
 * /rickroll slash command event handler
 *
 * @param {SlackCommandMiddlewareArgs} payload
 */
export default async (payload: SlackCommandMiddlewareArgs) => {
  try {
    await payload.ack();
    await payload.say({
      text: 'Never gonna give you up!',
      attachments: [
        {
          text: 'Never gonna let you down!',
          image_url:
            'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTAxdzFlNzJlYWpyYWpvZ2pxeXRicGxxc3pjc2xtc25lbzRiNWpubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lgcUUCXgC8mEo/giphy.gif',
        },
      ],
    });
  } catch (beepCmdErr) {
    console.error(beepCmdErr);
  }
};
