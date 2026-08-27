import { Ogjs } from '@mizansec/ogjs';
import { investigation } from './graph';
import './style.css';

async function start() {
  const status = document.querySelector<HTMLElement>('#status');
  if (!status) throw new Error('The starter needs a #status element.');

  // Give OGJS a container and the investigation data. The library creates and
  // resizes its own rendering surfaces, so the application does not manage a canvas.
  const og = new Ogjs({
    container: '#graph',
    theme: 'dark',
    accessibility: { label: 'Payment alert investigation' },
  });
  og.setGraph(investigation);

  // Present applies OGJS's semantic node, relationship, label, and contrast rules.
  // Roles live in graph data, keeping rendering decisions out of application code.
  og.present({ theme: 'dark' });

  // Group reads the investigation's domain key, arranges each community, creates
  // its boundary, and frames the result without application coordinate math.
  await og.group(({ data }) => (data as { group: string }).group, {
    duration: 320,
    fit: true,
    fitPaddingPx: 28,
  });

  // Stable ids let application UI respond without reading dense renderer arrays.
  og.on('nodeclick', ({ nodeId }) => {
    if (nodeId === undefined) return;
    const node = og.getNode(nodeId);
    status.textContent = node?.label ? `Selected · ${node.label}` : `Selected · ${String(nodeId)}`;
  });

  // Release OGJS-owned listeners and GPU resources when this page is discarded.
  addEventListener('pagehide', () => og.destroy(), { once: true });
}

void start();
